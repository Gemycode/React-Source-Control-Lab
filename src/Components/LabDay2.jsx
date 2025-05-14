import React from "react";
import { useState } from "react";
function LabDay2() {
  let [number, setNumber] = useState(0);

  const funcInc = () => {
      setNumber(++number);
  }

  const funcDec = () => {
      setNumber(--number);
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-3xl">Lab 1 increment & decrement button</h1>
        <h1>{number}</h1>
        <div className="flex gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={funcInc}
          >
            +
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={funcDec}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default LabDay2;
