import head from "../assets/head.jpg";
import tail from "../assets/tail.jpg";
import React from "react";
import { useState } from "react";
function Coin() {
    let [image, setImage] = useState(false);
    function flipCoin() {
        let coin = Math.ceil(Math.random() * 2);
        if (coin >1) {
            setImage(head);
        } else {
            setImage(tail);
        }
    }
  return (
    <div className="grid justify-center items-center h-screen">
     <img src={image} alt="" />
     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={flipCoin}>flip </button>
    </div>
  );
}

export default Coin;
