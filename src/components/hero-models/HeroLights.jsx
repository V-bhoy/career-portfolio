import * as THREE from 'three';

export function HeroLights() {
    return (
      <>
        <spotLight
          position={[3, 5, 3]}
          intensity={100}
          penumbra={0.3}
          color={"white"}
        />
        <spotLight
          position={[3, 3, 3]}
          intensity={40}
                angle={0.8}
                penumbra={0.2}
          color={"blue"}
        />
        <spotLight
          position={[-3, 1, 0]}
          intensity={30}
                angle={0.8}
                penumbra={0.2}
          color={"yellow"}
        />

        <primitive
          object={new THREE.RectAreaLight("#a259ff", 3, 2, 2)}
          position={[0, -1, 1]}
          rotation={[-Math.PI / 4, Math.PI / 6, 0]}
        />

        <pointLight position={[0, 1, 1]} intensity={1} color={"#7209b7"} />
        <pointLight position={[1, 2, -2]} intensity={10} color={"#0d00a4"} />
      </>
    );
 }