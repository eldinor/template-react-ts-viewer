import React, { DragEvent, useState} from "react";



const DropDivComponent = (props: { file?: File |undefined; }) => {
    const [file, setFile] = useState([])

  const [dragOver, setDragOver] = React.useState(false);
  const handleDragOverStart = () => setDragOver(true);
  const handleDragOverEnd = () => setDragOver(false);

  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setFile(event.dataTransfer.files[0])
    console.log(event.dataTransfer.files);
    props.file = event.dataTransfer.files[0];
    setDragOver(false);
  };

  return (
    <div
      onDragOver={enableDropping}
      onDrop={handleDrop}
      onDragEnter={handleDragOverStart}
      onDragLeave={handleDragOverEnd}
      style={
        dragOver ? { fontWeight: "bold", background: "red", height: 120 } : { background: "lightgrey", height: 120 }
      }
    >
      Drop Zone
    </div>
  );
};
export default DropDivComponent;
