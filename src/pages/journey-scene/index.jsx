import { OrbitControls, useTexture } from "@react-three/drei";
import Level1 from "./level1";
import Dog from "./level1/Dog";

const JourneyScene = () => {
  return (
    <>
      <color attach="background" args={[0xd0cbff]} />
      <OrbitControls />
      <group position-y={-0.75}>
        <Level1 />
        <Dog />
      </group>
    </>
  );
};

export default JourneyScene;
