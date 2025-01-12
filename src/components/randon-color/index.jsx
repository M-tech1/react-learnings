import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randColorUtil(length) {
    return Math.floor(Math.random() * length);
  }
  function handleHEXcolor() {
    //HEX eg: #0055ac
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randColorUtil(hex.length)];
    }

    setColor(hexColor);
  }

  function handleRGBcolor() {
    const r = randColorUtil(256);
    const g = randColorUtil(256);
    const b = randColorUtil(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleRGBcolor();
    else handleHEXcolor();
  }, [typeOfColor]);

  return (
    <>
      <div className="w-[100vw] h-[100vh]" style={{ background: color }}>
        <div className="flex flex-row justify-center items-center gap-2">
          <button onClick={() => setTypeOfColor("hex")} className="bg-blue-300">
            Create HEX color
          </button>
          <button onClick={() => setTypeOfColor("rgb")} className="bg-red-100">
            Create RGB color
          </button>
          <button
            onClick={typeOfColor === "hex" ? handleHEXcolor : handleRGBcolor}
            className="bg-green-300"
          >
            Generate Random color
          </button>
        </div>

        <div className="flex flex-col justify-center align-middle items-center text-white text-3xl mt-[10rem]">
          <h3>{typeOfColor === "rgb" ? "RGB" : "HEX Color"}</h3>
          <h1 className="text-8xl font-bold">{color}</h1>
        </div>
      </div>
    </>
  );
}
