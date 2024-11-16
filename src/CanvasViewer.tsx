import "./App.css";
import { useEffect, useRef } from "react";
import { Viewer, createViewerForCanvas } from "@babylonjs/viewer";

function CanvasViewer(props: { source: string | ArrayBufferView | File; orbit: boolean }) {
  const canvasRef = useRef(null);
  const viewerRef = useRef<Viewer | null>(null);
  if (viewerRef.current) {
    viewerRef.current.cameraAutoOrbit = { enabled: props.orbit };
  }

  useEffect(() => {
    if (!canvasRef.current) return;

    const viewerPromise = createViewerForCanvas(canvasRef.current, {engine:"WebGPU"});

    viewerPromise.then((viewer) => {
      viewer.loadModel(props.source);

      viewer.onModelChanged.add(() => {
        console.log("Model changed");
        viewerRef.current = viewer;
        viewer.cameraAutoOrbit = { enabled: props.orbit };
      });
    });

    return () => {};
  }, [canvasRef]);

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />;
}

export default CanvasViewer;
