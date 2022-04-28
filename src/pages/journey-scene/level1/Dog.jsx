import { useGLTF, useTexture } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";
import { useState, useEffect } from "react";

const Dog = (props) => {
  const bakedTexture = useTexture("/level1/baked1.jpg");

  const { nodes: sudoModel } = useGLTF("/level1/sudo.glb");
  // console.log(sudoModel);
  const { nodes: sudoHeadModel } = useGLTF("/level1/sudoHead.glb");
  // console.log(sudoHeadModel);

  const [rotation, setRotation] = useState([0, 0, 0]);

  const spring = useSpring({
    rotation,
    config: {
      friction: 40,
    },
  });

  useEffect(() => {
    let timeout;

    // Tweak Sudo's head so it rotates cleanly.
    // Ideally, this would be done in Blender.
    // sudoHeadModel.sudoHead001.position.x -= 0.02;
    // sudoHeadModel.sudoHead001.position.y -= 0.04;
    // sudoHeadModel.sudoHead001.position.z += 0.03;

    const wander = () => {
      setRotation([
        0.25 + Math.random() * 0.25,
        0.8 + Math.random() * 0.4 - 0.4,
        Math.random() * 2 - 1,
      ]);
      timeout = setTimeout(wander, (1 + Math.random() * 3) * 1000);
    };

    wander();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // useEffect(() => {
  //   console.log(rotation, spring);
  // }, [rotation, spring]);

  return (
    <>
      <group
        position={sudoModel.sudo001.position}
        rotation={sudoModel.sudo001.rotation}
      >
        <primitive object={sudoModel.sudo}>
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </primitive>
      </group>
      <a.primitive {...spring} object={sudoHeadModel.sudoHead001}>
        <primitive object={sudoHeadModel.sudoHead}>
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </primitive>
        <primitive object={sudoHeadModel.earsOutside}>
          <meshBasicMaterial color="#EBE1FD" />
        </primitive>
        <primitive object={sudoHeadModel.earsInside}>
          <meshBasicMaterial color="#EF50DF" />
        </primitive>
        <primitive object={sudoHeadModel.orange022}>
          <meshBasicMaterial map={bakedTexture} map-flipY={false} />
        </primitive>
      </a.primitive>
    </>
  );
};

export default Dog;
