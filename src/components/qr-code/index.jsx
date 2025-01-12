import { useState } from "react";
import { GrFormFilter } from "react-icons/gr";
import QRCode from "react-qr-code";

export default function QrCode() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <>
      <div className="flex flex-col mt-10 gap-10 justify-center align-middle items-center">
        <h1>QR code generator</h1>
        <div className="flex gap-3 bg-slate-400 p-4 rounded-md">
          <input
            onChange={(event) => setInput(event.target.value)}
            value={input}
            type="text"
            name="qr-code"
            placeholder="enter value"
            className="p-2 rounded-md"
          />

          <button
            className="bg-blue-500 p-1 rounded-md disabled:bg-slate-300 disabled:text-slate-50"
            onClick={handleGenerateQrCode}
            disabled={input.trim() !== "" ? false : true}
          >
            Generate
          </button>
        </div>
        <div>
          <QRCode id="qr-code-value" value={qrCode} size={280} />
        </div>
      </div>
    </>
  );
}
