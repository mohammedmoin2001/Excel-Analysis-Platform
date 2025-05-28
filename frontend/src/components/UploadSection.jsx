import React, { useState } from "react";
import "./UploadSection.css";

const UploadSection = () => {
  const [file, setFile] = useState(null);
  const [excelData, setExcelData] = useState([]);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:3001/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert("File uploaded successfully!");
        console.log(data.data);
        setExcelData(data.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Upload failed");
      });
  };

  return (
    <div className="upload-section">
      <h2>Upload Excel File</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      {excelData.length > 0 && (
  <div style={{ marginTop: '20px' }}>
    <h3>Parsed Excel Data</h3>
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          {Object.keys(excelData[0]).map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {excelData.map((row, i) => (
          <tr key={i}>
            {Object.values(row).map((val, j) => (
              <td key={j}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
    </div>
  );
};



export default UploadSection;