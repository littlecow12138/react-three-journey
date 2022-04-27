import { useGLTF, useTexture } from "@react-three/drei";

const Dog = (props) => {
  const bakedTexture = useTexture("/level1/baked1.jpg");

  const { nodes: sudoModel } = useGLTF("/level1/sudo.glb");
  console.log(sudoModel);
  return (
    <group
      position={sudoModel.sudo001.position}
      rotation={sudoModel.Scene.rotation}
    >
      <primitive object={sudoModel.sudo}>
        <meshBasicMaterial map={bakedTexture} map-flipY={false} />
      </primitive>
    </group>
  );
};

export default Dog;
