import React from "react";

interface FileDisplayProps {
  file: File;
}

const FileDisplay: React.FC<FileDisplayProps> = ({ file }) => {
  return (
    <div>
      <h2>Uploaded File:</h2>
      <p>Name: {file.name}</p>
      <p>Type: {file.type}</p>
      <p>Size: {file.size} bytes</p>
    </div>
  );
};

export default FileDisplay;
