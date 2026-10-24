import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";

/**
 * The portrait in the About section: the plain photo until the pointer comes
 * onto it, then the room dims and the pointer becomes a lamp. The lamp throws
 * real shadows (the nose across the cheek, the head onto the wall) and puts a
 * soft sheen on the skin, and a small ring lies on the face under the pointer,
 * tilting with it.
 *
 * So that nobody scrolls past without knowing, the lamp tours the face once
 * on its own when the portrait first comes into view, and a cursor coming
 * near draws the lamp's light out towards it before it even reaches the photo.
 *
 * All of it comes from one photo: the depth map (Depth Anything V2) gives each
 * pixel a height, and the normal map, derived from it, gives the slope. On
 * touch screens the lamp follows a finger on the photo for a moment.
 */
export default function ThreeJSPicture() {
  return (
    <div className="h-full w-full">
      <Canvas
        orthographic
        camera={{ position: [0, 0, 5], zoom: 100 }}
        style={{ width: "100%", height: "100%" }}
      >
        <Portrait />
      </Canvas>
    </div>
  );
}

// World units per CSS pixel, from the camera's zoom of 100.
const UNITS_PER_PX = 1 / 100;
// How far into the photo to zoom: 1 shows all of it.
const ZOOM = 1.12;
// How high above the photo the lamp hangs, in world units (the plane is 3
// across).
const LAMP_HEIGHT = 1.8;
// The lamp's tour when the portrait first comes into view: how long after it
// appears the tour starts, so the eye has landed on it first, and how long the
// tour lasts (ms).
const DEMO_DELAY_MS = 800;
const DEMO_MS = 2600;
// How far outside the photo the cursor starts drawing the light out, in world
// units (100px each), and how strong the light gets at the edge.
const TEASE_REACH = 1.5;
const TEASE_STRENGTH = 0.6;

const vertexShader = /* glsl */ `
  varying vec3 vPos;

  void main() {
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D uColor;
  uniform sampler2D uNormal;
  uniform sampler2D uDepth;
  uniform float uExtent;     // width of the plane in world units
  uniform vec3 uLight;       // the lamp, in world units, z above the plane
  uniform float uStrength;   // 0 when the pointer is off the photo, 1 when on it
  uniform float uRing;       // the ring under the pointer: shown only on the photo
  uniform float uTime;
  varying vec3 vPos;

  // How far the person stands out from the wall for light and shadow.
  // Exaggerated: true to scale, the nose's shadow would be a pixel long.
  const float RELIEF = 0.9;
  // How much of the photo's own light survives where the lamp doesn't reach.
  // Kept fairly high: the photo's shading is what keeps it reading as a
  // photo rather than a 3D render.
  const float AMBIENT = 0.28;
  // Lets the light creep a little past the point where a surface turns away,
  // as it does on skin, instead of ending on a hard line.
  const float WRAP = 0.4;
  // A warm lamp.
  const vec3 LAMP = vec3(1.0, 0.95, 0.87);

  vec2 toUv(vec2 xy) { return xy / (uExtent * ${ZOOM.toFixed(2)}) + 0.5; }
  vec2 toXY(vec2 uv) { return (uv - 0.5) * uExtent * ${ZOOM.toFixed(2)}; }
  float depthAt(vec2 uv) { return texture2D(uDepth, uv).r; }
  // 0 on the backdrop, 1 on the person.
  float subjectAt(float d) { return smoothstep(0.2, 0.55, d); }
  float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

  // Normals are stored with green pointing up, as three.js expects. The
  // backdrop is treated as flat: the depth map's soft edge would otherwise
  // give it steep slopes all round the head. The face is flattened a little
  // too, as the depth map is smoother than a real face and full-strength
  // slopes make it look sculpted.
  vec3 normalAt(vec2 uv) {
    vec3 n = normalize(texture2D(uNormal, uv).rgb * 2.0 - 1.0);
    return normalize(mix(vec3(0.0, 0.0, 1.0), n, 0.75 * subjectAt(depthAt(uv))));
  }

  // A ring lying flat on the surface under the pointer, with four ticks and a
  // needle along the surface normal. Seen from the front, the ring squashes
  // into an ellipse wherever the surface turns away, which shows its shape.
  float reticle(vec3 P) {
    vec2 cuv = toUv(uLight.xy);
    vec3 C = vec3(uLight.xy, depthAt(cuv) * RELIEF);
    vec3 N = normalAt(cuv);
    vec3 v = P - C;
    float h = dot(v, N);
    vec3 vt = v - h * N;
    // Only the part of the face close to the ring's plane carries it.
    float onPlane = 1.0 - smoothstep(0.015, 0.05, abs(h));

    const float R = 0.13;
    float r = length(vt);
    float w = max(fwidth(r), 0.004);
    float ring = 1.0 - smoothstep(w * 0.6, w * 1.6, abs(r - R));

    vec3 T = normalize(vec3(1.0, 0.0, 0.0) - N.x * N);
    vec3 B = cross(N, T);
    float a = abs(dot(vt, T));
    float b = abs(dot(vt, B));
    float inTick = step(R * 1.25, r) * step(r, R * 1.7);
    float ticks = inTick * max(1.0 - smoothstep(w * 0.5, w * 1.5, a),
                               1.0 - smoothstep(w * 0.5, w * 1.5, b));
    float dot0 = 1.0 - smoothstep(0.012, 0.012 + w, r);

    // The needle is drawn on screen: from the centre towards where the
    // normal points, longer the more the surface tilts.
    vec2 tip = C.xy + N.xy * 0.45;
    vec2 pa = P.xy - C.xy, ba = tip - C.xy;
    float k = clamp(dot(pa, ba) / max(dot(ba, ba), 1e-5), 0.0, 1.0);
    float needle = 1.0 - smoothstep(w * 0.5, w * 1.5, length(pa - ba * k));

    return max(onPlane * max(max(ring, ticks), dot0), needle * 0.8);
  }

  void main() {
    vec2 uv = toUv(vPos.xy);
    vec3 col = texture2D(uColor, uv).rgb;
    float lum = dot(col, vec3(0.299, 0.587, 0.114));
    float d = depthAt(uv);
    float subject = subjectAt(d);
    vec3 n = normalAt(uv);
    vec3 P = vec3(toXY(uv), d * RELIEF);

    vec3 toL = uLight - P;
    float dist = length(toL);
    vec3 L = toL / dist;
    float diffuse = clamp((dot(n, L) + WRAP) / (1.0 + WRAP), 0.0, 1.0);
    float atten = 1.0 / (1.0 + dist * dist * 0.45);

    // Cast shadows: walk from this point towards the lamp. If the surface
    // rises above the path, something stands in the way. The further away
    // the blocker, the softer the shadow's edge. Each pixel starts its walk
    // at a slightly different step (a cheap dither), which turns the banding
    // of a coarse walk into fine grain.
    float shadow = 1.0;
    float tMax = min(dist, (RELIEF - P.z) / max(L.z, 0.08));
    float jitter = hash(gl_FragCoord.xy);
    for (int i = 0; i < 40; i++) {
      float f = (float(i) + jitter) / 40.0;
      float t = tMax * f * f + 0.003;
      vec3 Q = P + L * t;
      float hq = depthAt(toUv(Q.xy)) * RELIEF;
      shadow = min(shadow, 1.0 - smoothstep(0.0, 0.01 + 0.35 * t, hq - Q.z - 0.004));
    }
    // Shadows on the wall stay faint: it's lit from the room as well.
    shadow = mix(mix(1.0, shadow, 0.6), shadow, subject);

    // A broad, faint sheen on skin, not on hair, beard or suit (the darker
    // parts). A tight, bright one looks like plastic.
    vec3 H = normalize(L + vec3(0.0, 0.0, 1.0));
    float skin = subject * smoothstep(0.2, 0.5, lum);
    float sheen = pow(max(dot(n, H), 0.0), 16.0) * skin * shadow * atten;

    vec3 lit = col * (AMBIENT + 1.5 * diffuse * atten * shadow * LAMP);
    lit += sheen * 0.12 * LAMP;
    // A touch of film grain, so the dimmed photo keeps a photo's texture.
    lit += (hash(gl_FragCoord.xy + fract(uTime) * 100.0) - 0.5) * 0.03;
    lit = mix(lit, vec3(0.94, 0.27, 0.27), reticle(P) * 0.9 * uRing);

    gl_FragColor = vec4(mix(col, lit, uStrength), 1.0);
  }
`;

function Portrait() {
  const [colorMap, depthMap, normalMap] = useLoader(TextureLoader, [
    "/portrait.jpg",
    "/portrait_depth.png",
    "/portrait_normal.png",
  ]);
  const { gl, size } = useThree();

  // The plane fills the square canvas: 300px at zoom 100 is 3 world units.
  const extent = Math.min(size.width, size.height) * UNITS_PER_PX;

  const uniforms = useMemo(
    () => ({
      uColor: { value: colorMap },
      uNormal: { value: normalMap },
      uDepth: { value: depthMap },
      uExtent: { value: extent },
      uLight: { value: new THREE.Vector3(0, 0, LAMP_HEIGHT) },
      uStrength: { value: 0 },
      uRing: { value: 0 },
      uTime: { value: 0 },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [colorMap, normalMap, depthMap]
  );
  uniforms.uExtent.value = extent;

  // Where the pointer is (world units), and whether it has moved recently.
  const pointer = useRef({ x: 0, y: 0, seen: false });
  // A finger on the photo steers the lamp until this time (ms).
  const touchUntil = useRef(0);
  // When the lamp's tour started (ms), and whether the visitor has put the
  // pointer on the photo themselves, after which it isn't needed.
  const demoStart = useRef<number | null>(null);
  const interacted = useRef(false);

  useEffect(() => {
    const canvas = gl.domElement;
    const toWorld = (ev: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: (ev.clientX - (rect.left + rect.width / 2)) * UNITS_PER_PX,
        y: -(ev.clientY - (rect.top + rect.height / 2)) * UNITS_PER_PX,
      };
    };
    const onMove = (ev: PointerEvent) => {
      if (ev.pointerType === "touch") return;
      pointer.current = { ...toWorld(ev), seen: true };
    };
    // Touch only counts on the photo itself, so scrolling elsewhere doesn't
    // move the lamp.
    const onTouch = (ev: PointerEvent) => {
      if (ev.pointerType !== "touch") return;
      pointer.current = { ...toWorld(ev), seen: true };
      touchUntil.current = performance.now() + 2500;
    };
    const onLeave = () => {
      pointer.current = { ...pointer.current, seen: false };
    };
    window.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerdown", onTouch);
    canvas.addEventListener("pointermove", onTouch);
    document.addEventListener("pointerleave", onLeave);
    // Vertical swipes still scroll the page; taps and sideways drags steer.
    canvas.style.touchAction = "pan-y";
    // The ring on the face is the cursor here.
    canvas.style.cursor = "none";

    // The tour starts once most of the portrait is on screen, once per visit.
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const inView = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (!reducedMotion && !interacted.current) demoStart.current = performance.now() + DEMO_DELAY_MS;
        inView.disconnect();
      },
      { threshold: 0.6 }
    );
    inView.observe(canvas);
    return () => {
      inView.disconnect();
      window.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerdown", onTouch);
      canvas.removeEventListener("pointermove", onTouch);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [gl]);

  const hasMouse = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches,
    []
  );

  useFrame(({ clock }, delta) => {
    uniforms.uTime.value = clock.getElapsedTime();
    const { x, y, seen } = pointer.current;
    const now = performance.now();
    const touching = now < touchUntil.current;
    // The photo is shown in a circle, so "on the photo" means inside it.
    const radius = extent / 2;
    const fromCentre = Math.hypot(x, y);
    const onPhoto = (touching || (hasMouse && seen)) && fromCentre < radius;
    if (onPhoto) interacted.current = true;
    const demo = demoStart.current === null ? 1 : (now - demoStart.current) / DEMO_MS;
    const strength = uniforms.uStrength.value;

    // Where the lamp should be, how bright the effect, and whether the lamp
    // jumps there rather than gliding.
    let lamp: [number, number] | null = null;
    let target = 0;
    let snap = false;
    if (onPhoto) {
      // Coming onto the photo, the lamp starts where the pointer is, rather
      // than gliding over from wherever it was left.
      lamp = [x, y];
      target = 1;
      snap = strength < 0.05;
    } else if (!interacted.current && demo >= 0 && demo < 1) {
      // The tour: left to right across the upper face in a gentle arc,
      // fading in and out at the ends.
      const s = demo * demo * (3 - 2 * demo);
      lamp = [(-0.8 + 1.6 * s) * radius, (0.3 + 0.25 * Math.sin(demo * Math.PI)) * radius];
      target = Math.min(1, demo / 0.15, (1 - demo) / 0.25);
      snap = true;
    } else if (hasMouse && seen && fromCentre < radius + TEASE_REACH) {
      // Near the photo: the lamp waits at the photo's edge nearest the
      // pointer, and the room dims a little, more the closer it gets.
      const k = 1 - (fromCentre - radius) / TEASE_REACH;
      const toEdge = (radius * 0.95) / fromCentre;
      lamp = [x * toEdge, y * toEdge];
      target = TEASE_STRENGTH * k;
      snap = strength < 0.02;
    }

    const light = uniforms.uLight.value;
    if (lamp) {
      const ease = snap ? 1 : 1 - Math.exp(-delta * 14);
      light.x += (lamp[0] - light.x) * ease;
      light.y += (lamp[1] - light.y) * ease;
    }
    const fade = 1 - Math.exp(-delta * 6);
    uniforms.uStrength.value += (target - strength) * fade;
    uniforms.uRing.value += ((onPhoto ? 1 : 0) - uniforms.uRing.value) * fade;
  });

  return (
    <mesh>
      <planeGeometry args={[extent, extent, 1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        toneMapped={false}
      />
    </mesh>
  );
}
