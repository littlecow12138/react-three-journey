import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import "./App.css";
import JourneyScene from "./pages/journey-scene";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [5, 1, 5] }}>
          <JourneyScene />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
