import React, { useCallback } from "react";

export default function DragDropFile(props) {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  const [fileToLoad, setFileToLoad] = React.useState()
  // ref
  const inputRef = React.useRef(null);
  
  // handle drag events
  const handleDrag = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  // triggers when file is dropped
  const handleDrop = function(e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        setFileToLoad(e.dataTransfer.files[0])

    

     handleFiles(e.dataTransfer.files[0]);
    }
  };
const handleFiles = useCallback((file) => {
    setFileToLoad(file)
      // display filename dropped
      props.parentFn(file)
      console.log(file);
 }, []);

  
  // triggers when file is selected with click
  const handleChange = function(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      // handleFiles(e.target.files);
      console.log(e.target.files[0])
    }
  };
  
// triggers the input when the button is clicked
  const onButtonClick = () => {
    (inputRef!.current! as any).click();
  };
  
  return (
    <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
      <input ref={inputRef} type="file" id="input-file-upload" multiple={true} onChange={handleChange} />
      <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
        <div>
          <p>Drag and drop your file here or</p>
          <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
        </div> 
      </label>
      { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
    </form>
  );
};