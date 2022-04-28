import { useState, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

const CameraHead = () => {
  const bakedTexture = useTexture("/level1/baked1.jpg");
  const { nodes: camHeadModel } = useGLTF("/level1/cameraHead.glb");
  // console.log(camHeadModel);

  const [rotateY, setRotateY] = useState(0);

  const spring = useSpring({
    "rotation-y": rotateY,
    config: {
      friction: 40,
    },
  });

  useEffect(() => {
    let timeout;

    const wander = () => {
      setRotateY(Math.random() * 0.5 * Math.PI);
      // timeout = setTimeout(wander, (1 + Math.random() * 5) * 1000);
      timeout = setTimeout(wander, 1000);
    };

    wander();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <group dispose={null}>
      <a.primitive {...spring} object={camHeadModel.cameraHead001}>
        <primitive object={camHeadModel.cameraHeadInner001}>
          <primitive object={camHeadModel.Sphere003}>
            <meshBasicMaterial map={bakedTexture} />
          </primitive>
          <primitive object={camHeadModel.orange038}>
            <meshBasicMaterial map={bakedTexture} />
          </primitive>
        </primitive>
      </a.primitive>
    </group>
  );
};

export default CameraHead;
