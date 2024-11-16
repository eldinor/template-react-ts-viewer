import { useState } from "react";
import "./App.css";
import CanvasViewer from "./CanvasViewer";

export default function App() {
  const [orbit, setOrbit] = useState(false);
  return (
    <>
      <CanvasViewer orbit={orbit} source={"https://playground.babylonjs.com/scenes/BoomBox.glb"} />
      <p></p>
      <button
        type="button"
        onClick={() => {
          setOrbit((state) => !state);
        }}
      >
        {orbit ? "Stop" : "Rotate"}
      </button>
    </>
  );
}
