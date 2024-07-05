import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Product 1",
      description: "This is product 1",
      price: 100,
      imageUrl:
        "https://2-react-hero-section.vercel.app/images/profile-pic2.png",
    },
  ],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = {
        id: nanoid(),
        imageUrl: action.payload.imageUrl,
        name: action.payload.name,
        description: action.payload.description,
        price: action.payload.price,
      };
      console.log(product);
      state.products.push(product);
    },
     removeProduct: (state, action) => {
       state.products = state.products.filter(
         (product) => product.id !== action.payload
       );
     },

   
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
