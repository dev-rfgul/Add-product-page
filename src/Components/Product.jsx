import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../feature/productSlice";

const Product = () => {
  const products = useSelector((state) => state.product.products);
  return (
    <div>
      <>
        <div className="text-lg   font-semibold mb-4">Products Page</div>
        <div>
          {products.map((product) => (
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md md:max-w-2xl">
              <div className=" flex flex-col justify-center items-center md:flex ">
                <div className="md:flex-shrink-0">
                  {
                    <img
                      className="h-48 w-full object-cover md:w-48"
                      src={product.imageUrl}
                    />
                  }
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {product.name}
                  </div>
                  <p className="mt-2 text-gray-500">{product.description}</p>
                  <p className="mt-2 text-gray-500">${product.price}</p>
                </div>

                <div className="p-8">
                  <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded">
                    Button
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
      ;
    </div>
  );
};

export default Product;
