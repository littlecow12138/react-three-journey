import React from "react";
import { Canvas } from "@react-three/fiber";

const Demo1 = () => (
  <Canvas>
    <pointLight position={[10, 10, 10]} />
    <mesh>
      <sphereBufferGeometry />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  </Canvas>
);

export default Demo1;
