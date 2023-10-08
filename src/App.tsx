import { useState } from "react";
import FileDisplay from "./FileDisplay";
import FileUploadModal from "./FileUpload";
import { FileUploadModalProps } from "./FileUpload";

function App() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
  };

  const fileUploadModalProps: FileUploadModalProps = {
    open: true,
    onClose: () => {},
    onFileUpload: handleFileUpload,
  };

  return (
    <div>
      <FileUploadModal {...fileUploadModalProps} />
      {uploadedFile && <FileDisplay file={uploadedFile} />}
    </div>
  );
}

export default App;
