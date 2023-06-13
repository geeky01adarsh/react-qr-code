import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QRcodeScanner = () => {
  const [result, setResult] = useState();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    const success = (result) => {
      scanner.clear();
      setResult(result);
      console.log("Successful", result);
    };

    const error = () => {
      console.warn("The scan was not successful");
    };

    scanner.render(success, error);
  }, []);
  return (
    <>
      <h1>QR COde Scanner</h1>

      {result ? <div className="">Success: {result}</div> : <div id="reader"></div>}
    </>
  );
};

export default QRcodeScanner;
