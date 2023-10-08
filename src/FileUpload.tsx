import React, { useState } from "react";
import { Box, Button, LinearProgress, Modal, Typography } from "@mui/material";

export interface FileUploadModalProps {
  open: boolean;
  onClose: () => void;
  onFileUpload: (file: File) => void;
}

const FileUploadModal: React.FC<FileUploadModalProps> = ({
  open,
  onClose,
  onFileUpload,
}) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    setFiles(droppedFiles);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("file", file);
    });

    const response = await fetch("/upload", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const uploadedFile = await response.blob();
      onFileUpload(new File([uploadedFile], "uploaded-file"));
      onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
          Drag and drop files here
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "200px",
            border: "2px dashed grey",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onDrop={handleDrop}
          onDragOver={(event) => event.preventDefault()}
        >
          <Typography variant="h6">Drop files here</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" onClick={handleUpload}>
            Upload
          </Button>
        </Box>
        <Box sx={{ mt: 2, width: "100%" }}>
          <LinearProgress variant="determinate" value={50} />
        </Box>
      </Box>
    </Modal>
  );
};

export default FileUploadModal;
