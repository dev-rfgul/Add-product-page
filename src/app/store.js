// import { configureStore } from "@reduxjs/toolkit";
// import productReducer from '../feature/productSlice'


// export const store=configureStore({
//     reducer:productReducer
// })


// store.js

import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../feature/productSlice';

const store = configureStore({
    reducer: {
        product: productReducer,
        // other reducers if any
    },
    // Optional: Add middleware, dev tools configuration, etc.
});

export default store; // Exporting 'store' directly
