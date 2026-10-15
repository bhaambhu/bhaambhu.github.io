import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";

/**
 * The portrait in the About section: grayscale until the pointer comes near,
 * then the pointer acts as a soft spotlight that brings back the photo's own
 * colour. The depth map raises the surface and the normal map shapes the
 * light, so the colour wraps around the face instead of sitting on it as a
 * flat disc. On touch screens, with no pointer to follow, the light drifts on
 * its own.
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
// How far the light reaches, in world units (the plane is 3 across).
const REACH = 3.7;

const vertexShader = /* glsl */ `
  uniform sampler2D uDepth;
  uniform float uDepthScale;
  varying vec2 vUv;
  varying vec3 vPos;

  void main() {
    // Sample a slightly smaller centre of the photo: a gentle zoom.
    vUv = (uv - 0.5) / ${ZOOM.toFixed(2)} + 0.5;
    vec3 pos = position;
    pos.z += texture2D(uDepth, vUv).r * uDepthScale;
    vPos = pos;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D uColor;     // the photo as shot, for the grayscale
  uniform sampler2D uColorLit;  // the same photo on a warm backdrop, for the colour
  uniform sampler2D uNormal;
  uniform sampler2D uDepth;
  uniform vec2 uLight;       // pointer position in world units
  uniform float uStrength;   // 0 when the pointer is away, 1 when it is here
  varying vec2 vUv;
  varying vec3 vPos;

  // How far the face stands out for lighting, and how high above the plane
  // the light floats. A low light rakes across the face, so the surfaces
  // that turn towards it light up and the ones that turn away stay gray.
  const float RELIEF = 0.55;
  // const float LIGHT_HEIGHT = 0.45;
  const float GRAY_CURVE = 0.8;
  const float LIGHT_HEIGHT = 0.55;
  // Distance at which the light has faded to nothing.
  const float REACH = ${REACH.toFixed(2)};

  void main() {
    vec3 base = texture2D(uColor, vUv).rgb;
    float lum = dot(base, vec3(0.299, 0.587, 0.114));

    // Normals are stored with green pointing up, as three.js expects.
    // (portrait_normal.png is derived from the depth map, which comes from
    // Depth Anything V2.)
    vec3 n = normalize(texture2D(uNormal, vUv).rgb * 2.0 - 1.0);

    // The surface point, raised by the depth map: nose and cheeks sit
    // nearer the light than the background does.
    vec3 surface = vec3(vPos.xy, texture2D(uDepth, vUv).r * RELIEF);
    vec3 toLight = vec3(uLight, LIGHT_HEIGHT) - surface;
    float dist = length(toLight);

    // The backdrop is flat, so it faces the light fully. Without this the
    // steep normals along the silhouette read as facing away, stayed gray
    // (white there) and drew a pale outline round the head.
    float subject = smoothstep(0.2, 0.55, texture2D(uDepth, vUv).r);
    float facing = mix(1.0, max(dot(n, toLight / dist), 0.0), subject);
    float falloff = pow(clamp(1.0 - dist / REACH, 0.0, 1.0), 2.0);
    float amount = clamp(uStrength * facing * falloff * 2.4, 0.0, 1.0);

    // Brighten the midtones (below 1 lifts them), leaving pure white and
    // black where they are, so the grayscale reads lighter and clearer.
    vec3 gray = vec3(pow(lum, GRAY_CURVE));
    vec3 lit = texture2D(uColorLit, vUv).rgb * (0.9 + 0.35 * facing * falloff);
    gl_FragColor = vec4(mix(gray, lit, amount), 1.0);
  }
`;

function Portrait() {
  const [colorMap, depthMap, normalMap, colorLitMap] = useLoader(TextureLoader, [
    "/portrait.jpg",
    "/portrait_depth.png",
    "/portrait_normal.png",
    "/portrait_color.jpg",
  ]);
  const { gl, size } = useThree();

  const uniforms = useMemo(
    () => ({
      uColor: { value: colorMap },
      uColorLit: { value: colorLitMap },
      uNormal: { value: normalMap },
      uDepth: { value: depthMap },
      uDepthScale: { value: 0.1 },
      uLight: { value: new THREE.Vector2(0, 0) },
      uStrength: { value: 0 },
    }),
    [colorMap, normalMap, depthMap, colorLitMap]
  );

  // Where the pointer is (world units), and whether it has moved recently.
  const pointer = useRef({ x: 0, y: 0, seen: false });
  // A finger on the photo steers the light until this time (ms), then the
  // drift takes over again.
  const touchUntil = useRef(0);

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
    // move the light.
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
    return () => {
      window.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerdown", onTouch);
      canvas.removeEventListener("pointermove", onTouch);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [gl]);

  // Touch screens get a light that drifts slowly across the face when no
  // finger is on it, so the effect is never invisible.
  const hasMouse = useMemo(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches,
    []
  );

  useFrame(({ clock }, delta) => {
    const t = clock.getElapsedTime();
    const target = new THREE.Vector2();
    let strength: number;

    const touching = performance.now() < touchUntil.current;

    if (touching || (hasMouse && pointer.current.seen)) {
      target.set(pointer.current.x, pointer.current.y);
      strength = 1;
    } else if (!hasMouse) {
      target.set(Math.sin(t * 0.45) * 0.9, Math.sin(t * 0.7) * 0.6);
      strength = 0.85;
    } else {
      target.copy(uniforms.uLight.value);
      strength = 0;
    }

    // Ease rather than snap, so the light glides after the pointer.
    const ease = 1 - Math.exp(-delta * 10);
    uniforms.uLight.value.lerp(target, ease);
    uniforms.uStrength.value += (strength - uniforms.uStrength.value) * (1 - Math.exp(-delta * 4));
  });

  // The plane fills the square canvas: 300px at zoom 100 is 3 world units.
  const extent = Math.min(size.width, size.height) * UNITS_PER_PX;

  return (
    <mesh>
      <planeGeometry args={[extent, extent, 100, 100]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        toneMapped={false}
      />
    </mesh>
  );
}
