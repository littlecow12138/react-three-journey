import { useState, useEffect } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useSpring, a, easings } from "@react-spring/three";

const Cube = () => {
  const cyanMatcap = useTexture("/level1/cyanOnBeige.jpg");
  const { nodes: cubeModel } = useGLTF("/level1/cube.glb");
  // console.log(cubeModel);

  const [floating, setFloating] = useState(false);
  const [rotation, setRotation] = useState([0, 0, 0]);

  const positionSpring = useSpring({
    position: [0, floating ? 0.2 : 0, 0],
    loop: { reverse: true },
    config: {
      easing: floating ? easings.easeInBack : easings.easeOutBounce,
      duration: 0.5 * 1000,
      friction: 80,
    },
  });

  const rotationSpring = useSpring({
    rotation,
    cancel: !floating,
    delay: 500,
    config: {
      friction: 40,
    },
  });

  useEffect(() => {
    let timeout;
    let rotationX = 0;
    let rotationY = 0;

    const bounce = () => {
      rotationX += Math.ceil(Math.random() * 3);
      rotationY += Math.ceil(Math.random() * 3);

      setFloating((v) => !v);
      setRotation([rotationX * Math.PI * 0.5, rotationY * Math.PI * 0.5, 0]);

      timeout = setTimeout(bounce, 1.5 * 1000);
    };

    bounce();

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <a.group dispose={null} {...positionSpring}>
      <primitive object={cubeModel.cube}>
        <a.primitive {...rotationSpring} object={cubeModel.pink002}>
          <meshMatcapMaterial matcap={cyanMatcap} />
        </a.primitive>
      </primitive>
    </a.group>
  );
};

export default Cube;
