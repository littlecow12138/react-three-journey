import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import "./App.css";
import JourneyScene from "./pages/journey-scene";
import { animated, useSpring } from "react-spring";
import Catalog1 from "./pages/journey-scene/catalog1";

function App() {
  const [catalogActive, setCatalogActive] = useState(false);
  const [contentActive, setContentActive] = useState(false);

  const btnstyles = useSpring({ scale: catalogActive ? 0 : 1 });
  const btnstylesRe = useSpring({ scale: catalogActive ? 1 : 0 });
  // const styles= useSpring({
  //   x: catalogActive ? "0%" : "100%",
  // });
  const [styles, setCatalogSpring] = useSpring(() => ({ x: "100%" }));
  const [contentStyles, setContentSpring] = useSpring(() => ({ x: "100%" }));

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

  const openContent = (item) => {
    setContentSpring.start({
      to: {
        x: "0%",
      },
    });
    setContentActive(true);
  };

  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <div className="container">
          {/* canvas scene */}
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
          {/* catalog */}
          <animated.div
            className="catalog"
            style={{
              width: "30%",
              ...styles,
            }}
          >
            <Catalog1 openContent={(item) => openContent(item)} />
          </animated.div>
          {/* corresponding content */}
          <animated.div className="Content" style={contentStyles}>
            {/* render by routes */}
            <div className="backBtn">
              <div className="lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
                <span className="line line4"></span>
              </div>
            </div>
          </animated.div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
