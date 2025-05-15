import React, { useState } from "react";
import ProductUi from "./ProductUi.jsx";
import getAll from "./Products.js";

function Products() {
  const [arr, setArr] = useState(getAll());
console.log(arr)
  function getClothes() {
    const all = getAll();
    const clothesOnly = all.filter((item) => item.category ==="electronics");
    setArr(clothesOnly);
  }

  return (
    <>
      <button
        onClick={getClothes}
        style={{
          padding: "10px 20px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      >
        Elect
      </button>

      <div className="flex flex-wrap gap-4">
        {arr.map((item, index) => (
          <ProductUi key={index} data={item} />
        ))}
      </div>
    </>
  );
}

export default Products;
