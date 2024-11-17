import "./App.css";
import { HTML3DElement } from "@babylonjs/viewer";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "babylon-viewer": HTML3DElementAttributes;
    }
  }
}
interface HTML3DElementAttributes extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  source?: string;
  env?: string;
}

export default function App() {
  new HTML3DElement();
  return (
    <>
      <babylon-viewer source="https://raw.githubusercontent.com/eldinor/ForBJS/master/office_chair_modern-opt.glb"></babylon-viewer>
    </>
  );
}
