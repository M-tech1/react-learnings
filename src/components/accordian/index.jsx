import { data } from "autoprefixer";
import Data from "./data";
import { useState } from "react";
function Accordian() {
  const [select, setSelect] = useState(null);
  const [enableMul, setEnableMul] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(GetId) {
    setSelect(GetId === select ? null : GetId);
  }

  function handleMultiselect(GetId) {
    let cypMul = [...multiple];
    const findIndexOfCurrent = cypMul.indexOf(GetId);
    console.log(findIndexOfCurrent);
    if (findIndexOfCurrent === -1) cypMul.push(GetId);
    else cypMul.slice(findIndexOfCurrent, 1);
    setMultiple(cypMul);
  }

  console.log(select, multiple);
  return (
    <>
      <div className="">
        <button
          onClick={() => setEnableMul(!enableMul)}
          className="bg-green-300 text-white flex align-middle"
        >
          activate
        </button>
        {Data && Data.length > 0 ? (
          Data.map((item) => (
            <div className="">
              <div
                onClick={
                  enableMul
                    ? () => handleMultiselect(data.id)
                    : () => handleSingleSelection(item.id)
                }
                className="justify-center items-center w-full bg-blue-200 my-4 flex flex-row gap-2 content-center hover:cursor-pointer"
              >
                {item.question}
                <div>+</div>
              </div>
              {select === item.id ? (
                <div>
                  <span className="flex items-center justify-center">
                    {item.answer}
                  </span>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </>
  );
}

export default Accordian;
