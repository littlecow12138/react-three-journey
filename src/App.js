import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import "./App.css";
import JourneyScene from "./pages/journey-scene";
import { animated, useSpring } from "react-spring";

function App() {
  const [catalogActive, setCatalogActive] = useState(false);

  const btnstyles = useSpring({ scale: catalogActive ? 0 : 1 });
  const btnstylesRe = useSpring({ scale: catalogActive ? 1 : 0 });
  // const styles= useSpring({
  //   x: catalogActive ? "0%" : "100%",
  // });
  const [styles, setCatalogSpring] = useSpring(() => ({ x: "100%" }));

  // click scene to wake catalog
  const handleSceneClick = () => {
    setCatalogSpring.stop();
    setCatalogSpring.start({
      config: {
        friction: 30,
      },
      to: {
        x: "0%",
      },
    });
    setCatalogActive(true);
  };
  // click close button to close catalog
  const handleSceneClose = () => {
    setCatalogSpring.stop();
    setCatalogSpring.start({
      to: {
        x: "100%",
      },
    });
    setCatalogActive(false);
  };

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <div className="container">
          <div
            className="canvasWrapper"
            style={{ width: catalogActive ? "70%" : "100%" }}
          >
            <Canvas flat dpr={[1, 2]} camera={{ fov: 25, position: [5, 1, 5] }}>
              <JourneyScene />
            </Canvas>
            <animated.div
              className="exitBtn"
              style={btnstylesRe}
              onClick={() => handleSceneClose()}
            >
              <span className="bars">
                <span className="bar bar1"></span>
                <span className="bar bar2"></span>
              </span>
            </animated.div>
            <animated.div
              className="enterBtn"
              style={btnstyles}
              onClick={() => handleSceneClick()}
            >
              <span className="icon">
                <span className="left-button"></span>
              </span>
              <span>Click to explore</span>
            </animated.div>
          </div>

          <animated.div
            className="catalog"
            style={{
              width: "30%",
              ...styles,
            }}
          >
            123
          </animated.div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
