import { Canvas, ThreeElements, useLoader } from "@react-three/fiber";
import { forwardRef, Ref, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import useMousePosition from "../utils/useMousePosition";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function ThreeJSPicture() {
  const canvasRef = useRef<HTMLCanvasElement>(null!);
  const mousePosition = useMousePosition(canvasRef);
  const pointLightRef = useRef<THREE.PointLight>(null!);
  const meshRef = useRef<THREE.Mesh>(null!);

  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    if (pointLightRef.current) {
      setIsReady(true);
    }
  });
  return (
    <div className="h-full w-full">
      <Canvas
        orthographic
        camera={{ position: [0, 0, 5], zoom: 100 }}
        style={{ width: "100%", height: "100%" }}
        ref={canvasRef}
      >
        <SanjayClose ref={meshRef} />
        <ambientLight intensity={1} />
        <pointLight
          position={[mousePosition.x, -mousePosition.y, 0]}
          decay={0}
          color={"red"}
          // distance={500}
          ref={pointLightRef}
          intensity={3}
          castShadow
        />
        {/* {isReady && (
          <pointLightHelper args={[pointLightRef.current, 2, 0xff0000]} />
        )} */}
      </Canvas>
      {/* For debugging mouse position */}
      {/* <div className="absolute top-0 text-white text-xs">
        {JSON.stringify(mousePosition, null, 0)}
      </div> */}
    </div>
  );
}

function SanjayClose(props: ThreeElements["mesh"]) {
  const [colorMap, displacementMap, normalMap] = useLoader(TextureLoader, [
    "/close.jpg",
    "/close_Depth.jpg",
    "/close_Normal_2.jpg",
  ]);
  // const rotationSpeed = 1;
  // useFrame((state, delta) => {
  //   meshRef.current.rotation.y += delta * rotationSpeed;
  // });
  return (
    <mesh {...props}>
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      <planeGeometry args={[3, 3, 100, 100]} />
      <meshStandardMaterial
        map={colorMap}
        flatShading
        normalMap={normalMap}
        normalScale={new THREE.Vector2(0.5, 0.5)}
        displacementMap={displacementMap}
        displacementScale={0.1}
      />
    </mesh>
  );
}
function SanjayFar(props: ThreeElements["mesh"]) {
  const [colorMap, displacementMap, normalMap] = useLoader(TextureLoader, [
    "/relight/sanjay_far.jpg",
    "/relight/sanjay_far_Depth.jpg",
    "/relight/sanjay_far_Normal.jpg",
  ]);
  // const rotationSpeed = 1;
  // useFrame((state, delta) => {
  //   meshRef.current.rotation.y += delta * rotationSpeed;
  // });
  return (
    <mesh {...props}>
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      <planeGeometry args={[3, 3, 100, 100]} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        // normalScale={new THREE.Vector2(0.5, 0.5)}
        displacementMap={displacementMap}
        displacementScale={0.1}
      />
    </mesh>
  );
}
