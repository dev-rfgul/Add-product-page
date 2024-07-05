import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../feature/productSlice";

const Product = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const [zoomStyle, setZoomStyle] = useState({});

  const handleMouseMove = (e, productId) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const originX = (x / rect.width) * 100;
    const originY = (y / rect.height) * 100;
    setZoomStyle({
      [productId]: { transformOrigin: `${originX}% ${originY}%` },
    });
  };

  const handleMouseLeave = (productId) => {
    setZoomStyle({ [productId]: { transformOrigin: "center center" } });
  };

  return (
    <div className="p-4">
      <div className="text-lg font-semibold mb-4">Products Page</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row">
              
              <div
                className="image-container md:flex-shrink-0 relative"
                onMouseMove={(e) => handleMouseMove(e, product.id)}
                onMouseLeave={() => handleMouseLeave(product.id)}
              >
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={product.imageUrl}
                  alt={product.name}
                  style={zoomStyle[product.id]}
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div>
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {product.name}
                  </div>
                  <p className="mt-2 text-gray-600">{product.description}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-lg font-bold text-gray-900">
                    ${product.price}
                  </p>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                  </button>
                  <button
                onClick={() => dispatch(removeProduct(product.id))}
                className="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded-t md:rounded-l md:rounded-r-none flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
