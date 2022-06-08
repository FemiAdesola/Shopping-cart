import {
    FETCH_PRODUCTS, 
    FILTER_PRODUCTS_BY_SIZE,
    ORDER_PRODUCTS_BY_PRICE,
} from "../type";
  
  export const productsReducer = (state = {}, action) => {
    switch (action.type) {
        // Reducer to get all the data 
        case FETCH_PRODUCTS:
            return { 
                items: action.payload, 
                filteredItems: action.payload 
            };

         // Reducer to filter all the data base on size
        case FILTER_PRODUCTS_BY_SIZE:
            return {
              ...state,
              size: action.payload.size,
              filteredItems: action.payload.items,
            };
         // Reducer to order by price all the data base on size
         case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };
      default:
        return state;
    }
  };