import {
    FETCH_PRODUCTS,
} from "../type";
  
  export const productsReducer = (state = {}, action) => {
    switch (action.type) {
      case FETCH_PRODUCTS:
        return { 
            itemsProduct: action.payload, 
        };
      default:
        return state;
    }
  };