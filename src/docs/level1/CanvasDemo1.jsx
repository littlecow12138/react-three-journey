import React from "react";
import { Canvas } from "@react-three/fiber";

const Demo1 = () => (
  <div style={{ background: "lightgrey", width: "200px", height: "200px" }}>
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <sphereBufferGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </Canvas>
  </div>
);

export default Demo1;
