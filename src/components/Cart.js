import React from 'react';
import FormatCurrency from '../util';

const Cart = ({cartItems, removeFromCart}) => {
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
          </div>
          {cartItems.length !== 0 && (
            <div className="cart">
              <div className="total">
                <div>
                  Total:{" "}
                  {FormatCurrency(
                    cartItems.reduce((a, currentValue) => a + currentValue.price * currentValue.count, 0)
                  )}
                </div>
                <button className="button primary">Continue</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default Cart;