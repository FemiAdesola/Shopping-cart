import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Form =({createOrder, handleInput})=> {
  
    return (
    <div>
         <Fade cascade direction="right">
        <div className="cart">
            <form onSubmit={createOrder}>
                <ul className="form-container">
                    <li>
                        <label>Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          onChange={handleInput}
                        ></input>
                    </li>
                    <li>
                        <label>Name</label>
                        <input
                          name="name"
                          type="text"
                          required
                          onChange={handleInput}
                        ></input>
                    </li>
                    <li>
                        <label>Address</label>
                        <input
                          name="address"
                          type="text"
                          required
                          onChange={handleInput}
                        ></input>
                    </li>
                    <li>
                        <button className="button primary" type="submit">
                          Checkout
                        </button>
                    </li>
                </ul>
            </form>
        </div>
        </Fade>
    </div>
    );
}

export default Form;
