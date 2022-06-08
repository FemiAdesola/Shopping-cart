import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer";
import { orderReducer } from "./reducers/orderReducer";
import { productsReducer } from "./reducers/productReducers";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart:cartReducer,
        order:orderReducer
    },
  });
  export default store;