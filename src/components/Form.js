import React, { Component } from 'react';
import { Fade } from 'react-awesome-reveal';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          email: "",
          address: "",
        };
      }

    createOrder = (e) => {
        e.preventDefault();
        const order = {
          name: this.state.name,
          email: this.state.email,
          address: this.state.address,
          cartItems: this.props.cartItems,
        };
        this.props.createOrder(order);
    };

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

  render() {
    return (
        <Fade cascade direction="right">
        <div className="cart">
            <form onSubmit={this.createOrder}>
                <ul className="form-container">
                    <li>
                        <label>Email</label>
                        <input
                          name="email"
                          type="email"
                          required
                          onChange={this.handleInput}
                        ></input>
                    </li>
                    <li>
                        <label>Name</label>
                        <input
                          name="name"
                          type="text"
                          required
                          onChange={this.handleInput}
                        ></input>
                    </li>
                    <li>
                        <label>Address</label>
                        <input
                          name="address"
                          type="text"
                          required
                          onChange={this.handleInput}
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
    );
  }
}
