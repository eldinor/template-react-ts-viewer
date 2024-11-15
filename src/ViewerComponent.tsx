import { useEffect, useRef } from 'react';
import './App.css';
import { Engine } from '@babylonjs/core';
import { Viewer } from '@babylonjs/viewer';

function ViewerComponent(props: {
  source: string | ArrayBufferView | File;
  orbit: boolean;
}) {
  const canvasRef = useRef(null);
  const viewerRef = useRef<Viewer | null>(null);
  if (viewerRef.current) {
    viewerRef.current.cameraAutoOrbit ={enabled:props.orbit}
  }

  useEffect(() => {
    if (!canvasRef.current) return;

    const engine = new Engine(canvasRef.current, true);
    const viewer = new Viewer(engine, {
      onInitialized: (details) => {
        console.log('DETAILS', details);
        
      },
    });

    viewer.onEnvironmentChanged.add(() => console.log('ENV CHANGE'));

    viewer.onModelError.add(() => {
      console.log('ModelError');
    });

    viewer.loadModel(props.source);

    viewer.onModelChanged.add(() => {
      console.log('Model changed');
      viewerRef.current = viewer;
      viewer.cameraAutoOrbit ={enabled:props.orbit}
    });

    return () => {
      engine.dispose();
    };
  }, []);

  return (
    <canvas
      title="BoomBox"
      ref={canvasRef}
      style={{ width: '100%', height: '100%' }}
    />
  );
}

export default ViewerComponent;
