import React from "react";
import { useState } from "react";
import QRCode from "react-qr-code";

const QRcodeGenerator = () => {
  const [value, setValue] = useState();
  const [back, setBack] = useState("#FFFFFF");
  const [fore, setFore] = useState("#000000");
  const [size, setSize] = useState(256);

  const onImageDownload = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <div>
      <div className="App">
        <center>
          <br />
          <br />
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            placeholder="Value of Qr-code"
          />
          <br />
          <br />
          <br />
          {value && (
            <>
              <QRCode
                title="Attendance"
                value={value}
                id="QRCode"
                // bgColor={back}
                // fgColor={fore}
                size={size === "" ? 250 : size}
              />
              <br/>
              <button onClick={onImageDownload}>Download</button>
            </>
          )}
        </center>
      </div>
    </div>
  );
};

export default QRcodeGenerator;
