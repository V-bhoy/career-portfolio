import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { DeveloperRoom } from "./Developer-room";
import { HeroLights } from "./HeroLights";
import Particles from "./Particles";

export function HeroExperience() {
    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
      const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    return (
      <Canvas
        camera={{ position: [-10, 4, 25], fov: 32 }}
        onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
      >
            <HeroLights />
            <Particles />
        <OrbitControls
          enablePan={false}
          enableZoom={!isTablet && !isMobile}
          maxDistance={20}
          minDistance={5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 6}
        />
        <DeveloperRoom
          scale={0.13}
          position={[0, -2, 0]}
        />
      </Canvas>
    );
}