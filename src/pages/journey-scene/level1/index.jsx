import { useGLTF, useTexture } from "@react-three/drei";

const Level1 = (props) => {
  const bakedTexture = useTexture("/level1/baked1.jpg");
  const { nodes: levelModel1 } = useGLTF("/level1/baked1.glb");
  console.log(levelModel1);

  return (
    <group dispose={null}>
      <primitive object={levelModel1.white013}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </primitive>
    </group>
  );
};

export default Level1;
