import { 
    CREATE_ORDER, 
    CLEAR_CART, 
    CLEAR_ORDER, 
    FETCH_ORDERS
} from "../type";


// Action for creating order 
export const createOrder = (order) => (dispatch) => {
  fetch("/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .then((data) => {
        dispatch({ 
            type: CREATE_ORDER, 
            payload: data 
        });
      localStorage.clear("cartItems");
      dispatch({ type: CLEAR_CART });
    });
};

// Action for clearing order 
export const clearOrder = () => (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
};


// Action for fetching order
export const fetchOrders = () => (dispatch) => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ 
            type: FETCH_ORDERS, 
            payload: data });
      });
  };