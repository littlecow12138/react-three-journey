import { Suspense } from "react";
import { Loader } from "@react-three/drei";


const JourneyScene = () => {
  return <Suspense fallback={<Loader />}></Suspense>;
};

export default JourneyScene;
