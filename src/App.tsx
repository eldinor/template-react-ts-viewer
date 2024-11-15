import { useState } from 'react'
import './App.css'
import ViewerComponent from './ViewerComponent';

export default function App() {
  const [orbitSpeed, setOrbitSpeed] = useState(false);
  return (
<>
        <ViewerComponent
               orbit={orbitSpeed}
               source={'https://playground.babylonjs.com/scenes/BoomBox.glb'}
        />
        <p></p>
      <button
        type="button"
        onClick={() => {
          setOrbitSpeed((arg) => !arg);
        }}
      >
        {orbitSpeed ? 'Stop' : 'Rotate'}
      </button>
</>
  );
}