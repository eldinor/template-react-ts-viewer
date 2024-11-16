import * as React from "react";
import { useEffect, useRef } from "react";
import "./App.css";
import { HTML3DElement } from "@babylonjs/viewer";

export default function App()
 {
  const htmlElementRef = useRef<HTMLElement | null>(null);
  new HTML3DElement()
  
    useEffect(() => {
    if (htmlElementRef.current) {
      htmlElementRef.current!.innerHTML = '<babylon-viewer source="https://raw.githubusercontent.com/eldinor/ForBJS/master/office_chair_modern-opt.glb"></babylon-viewer>'
    }
  }, [htmlElementRef ])

  return (
    <>
      <div ref={htmlElementRef} style={{backgroundColor:"lightgrey"}}></div>
    </>
  );
}
