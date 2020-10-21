import React, { useState } from "react";
import axios from "axios";
import { Button } from "semantic-ui-react";
import TableOutput from "../table/table";

import "./upload.css";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [result, setResult] = useState({
    AUDOOH: "a",
    AUDIOM: "x",
    USDAB: null,
    JPYSN: 1,
  });

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("myFile", selectedFile, selectedFile.name);
      console.log(selectedFile);

      const res = await axios.post("search/file", formData);
      setResult(res);
    } catch (e) {
      console.log(e);
    }
  };

  // File content to be displayed after
  // file upload is complete
  // const fileData = () => {
  //   if (selectedFile) {
  //     return (
  //       <div>
  //         <h2>File Details:</h2>
  //         <p>File Name: {selectedFile.name}</p>
  //         <p>File Type: {selectedFile.type}</p>
  //         <p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <br />
  //         <h4>Choose before Pressing the Upload button</h4>
  //       </div>
  //     );
  //   }
  // };

  return (
    <div>
      <div className="upload">
        <div className="input">
          <Button>
            <input type="file" onChange={onFileChange} />
          </Button>
        </div>
        <Button color="green" onClick={onFileUpload}>
          Upload!
        </Button>
      </div>
      <TableOutput result={result} />
    </div>
  );
};

export default Upload;
