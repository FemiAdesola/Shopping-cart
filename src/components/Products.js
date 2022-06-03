import React from 'react';
import FormatCurrency from '../util';
import { Fade } from 'react-awesome-reveal';

const Products = ({products, addToCart}) => {
    return (
        <div>
            <Fade direction="up" cascade>
            <ul className="products">
                {products.length? (products.map(product =>(<li key={product._id}>
                    <div className='product'>
                        <a href="#">
                        <img src={product.image} alt={product.title}></img>
                        <p>{product.title}</p>
                        </a>
                        <div className="product-price">
                      <div>{FormatCurrency (product.price)}</div>
                      <button onClick={()=>addToCart(product)} className="button primary">
                        Add To Cart
                      </button>
                    </div>
                    </div>
                </li>))):(null)}
            </ul>
            </Fade>
        </div>
    );
};

export default Products;
