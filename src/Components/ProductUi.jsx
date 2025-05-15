import React from 'react';

export default function ProductUi({ data }) {
  console.log(data)
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        src={data.image}
        alt="Card Image"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2">{data.title}</h5>
        <p className="text-gray-700 text-base mb-4 line-clamp-3">
          {data.description}
        </p>
        <h2 className="text-green-700 font-bold mb-2">${data.price}</h2>
        <a
          href="#"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </a>
      </div>
    </div>
  );
}
