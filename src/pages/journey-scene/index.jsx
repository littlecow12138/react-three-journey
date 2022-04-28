import { OrbitControls } from "@react-three/drei";
import Level1 from "./level1";
import Cactus from "./level1/Cactus";
import CameraHead from "./level1/CameraHead";
import Cube from "./level1/Cube";
import Dog from "./level1/Dog";
import Pyramid from "./level1/Pyramid";

const JourneyScene = () => {
  return (
    <>
      <color attach="background" args={[0xd0cbff]} />
      <OrbitControls />
      <group position-y={-0.75}>
        <Level1 />
        <Dog />
        <Cube />
        <Pyramid />
        <CameraHead />
        <Cactus />
      </group>
    </>
  );
};

export default JourneyScene;
