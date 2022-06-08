import React, {useState} from 'react';
import { connect } from 'react-redux';
import FormatCurrency from '../util';
import Form from './Form';
import { Fade } from 'react-awesome-reveal';
import { removeFromCart } from '../store/action/cartActions';

const Cart = ({cartItems,  createOrder, handleInput, removeFromCart}) => {
    const [showCheckout, setCheckout]= useState(false);
    return (
        <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {cartItems.length} different item in the cart{" "}
          </div>
        )}
        <div>
          <div className="cart">
            <Fade cascade direction="left">
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title}></img>
                  </div>
                  <div>
                  <div>
                      {item.title}
                  </div>
                    <div className="right">
                      {FormatCurrency(item.price)} x {item.count}{" "}
                      <button
                        className="button"
                        onClick={() => removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            </Fade>
          </div>
          {cartItems.length !== 0 && (
            <div>
                <div className="cart">
                <div className="total">
                    <div>
                    Total:{" "}
                    {FormatCurrency(
                        cartItems.reduce((a, currentValue) => a + currentValue.price * currentValue.count, 0)
                    )}
                    </div>
                    <button onClick={()=>(setCheckout({showCheckout:true}))} className="button primary">Continue</button>
                </div>
                </div>
                {showCheckout && (
                <Form createOrder={createOrder} handleInput={handleInput}/>
                )
                }
            </div>
          )}
        </div>
      </div>
    );
};

export default connect(
  (state) => ({
   cartItems:state.cart.cartItems
  }),
  {removeFromCart}
)(Cart);