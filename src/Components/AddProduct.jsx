import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../feature/productSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddProduct = () => {
  const [product, setProduct] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const addProductHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      id: nanoid(),
      img,
      name,
      description,
      price,
    };
    dispatch(addProduct(newProduct));
    console.log(newProduct);
    console.log("btn clicked " + nanoid());

    setImg("");
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <div>
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Product URL"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

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
