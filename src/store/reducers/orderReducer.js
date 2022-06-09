import { 
    CREATE_ORDER, 
    CLEAR_ORDER,
    FETCH_ORDERS
} from "../type";

const orderReducer = (state = {}, action) => {
  switch (action.type) {
    
    //   reducer for creating order
    case CREATE_ORDER:
      return { order: action.payload };

    //   reducer for clearing order
    case CLEAR_ORDER:
      return { order: null };
      
    //   reducer for fetching order
    case FETCH_ORDERS:
        return { orders: action.payload };
    default:
      return state;
  }
};
export { orderReducer };