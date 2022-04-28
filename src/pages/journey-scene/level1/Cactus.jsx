import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cactus = () => {
  const bakedTexture = useTexture("/level1/baked1.jpg");
  const { nodes: cactusModel } = useGLTF("/level1/cactus.glb");
  // console.log(cactusModel);
  const uTime = useRef({ value: 0 });

  //  Update cactus time uniform
  useFrame(({ clock }) => (uTime.current.value = clock.elapsedTime * 1000));

  return (
    <group>
      <primitive object={cactusModel.cactus001}>
        <primitive
          object={cactusModel.green001}
          material-onBeforeCompile={(shader) => {
            shader.uniforms.uTime = uTime.current;

            shader.vertexShader = shader.vertexShader.replace(
              "#include <common>",
              `
                #include <common>
                uniform float uTime;

                vec2 rotate(vec2 v, float a) {
                  float s = sin(a);
                  float c = cos(a);
                  mat2 m = mat2(c, -s, s, c);
                  return m * v;
              }
              `
            );

            shader.vertexShader = shader.vertexShader.replace(
              "#include <begin_vertex>",
              `
                #include <begin_vertex>
    
                float angleMultiplier = 0.25;
                float timeFrequency = 0.002;
                float elevationOffsetMultiplier = 3.0;
    
                vec2 transformedRotated = rotate(transformed.xz, sin(uTime * timeFrequency + transformed.z * elevationOffsetMultiplier) * log(abs(transformed.z) + 1.0) * angleMultiplier);
                transformed.xz = transformedRotated;
              `
            );
          }}
        >
          <meshBasicMaterial map={bakedTexture} />
        </primitive>
      </primitive>
    </group>
  );
};

export default Cactus;
