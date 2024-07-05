import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addProduct } from "../feature/productSlice";

const AddProduct = () => {
  const [product, setProduct] = useState("");

const dispatch = useDispatch();

  const addProductHandler = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    setProduct("");
  };

  return (
    <div>
      <button
        onClick={addProductHandler}
        className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-500 hover:to-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
