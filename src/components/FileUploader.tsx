import React from "react";
import { uploadData } from "aws-amplify/storage";

export function FileUploader() {
  const [file, setFile] = React.useState<File>();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFile(event.target.files?.[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button
        onClick={() => {
          if (!file) return;

          uploadData({
            path: `picture-submissions/${file.name}`,
            data: file,
          });
        }}
      >
        Upload
      </button>
    </div>
  );
}
