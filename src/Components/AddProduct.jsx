import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../feature/productSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddProduct = () => {
  // const [product, setProduct] = useState(""); 
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const addProductHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      id: nanoid(),
      imageUrl,
      name,
      description,
      price,
    };
    dispatch(addProduct(newProduct));
    console.log(newProduct);
    console.log("btn clicked " + nanoid());

    setImageUrl("");
    setName("");
    setDescription("");
    setPrice("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-900 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-100 mb-4">Add a New Product</h2>
      <div className="space-y-4">
        <input
          type="text"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 transition-colors duration-200 ease-in-out"
          placeholder="Enter Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 transition-colors duration-200 ease-in-out"
          placeholder="Enter Product URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <input
          type="text"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 transition-colors duration-200 ease-in-out"
          placeholder="Enter Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-2 px-4 transition-colors duration-200 ease-in-out"
          placeholder="Enter Product Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <button
        onClick={addProductHandler}
        className="mt-6 w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-500 hover:to-red-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
