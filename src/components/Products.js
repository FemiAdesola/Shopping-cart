import React from 'react';
import FormatCurrency from '../util';

const Products = ({products}) => {
    return (
        <div>
            <ul className="products">
                {products.length? (products.map(product =>(<li key={product._id}>
                    <div className='product'>
                        <a href="#">
                        <img src={product.image} alt={product.title}></img>
                        <p>{product.title}</p>
                        </a>
                        <div className="product-price">
                      <div>{FormatCurrency (product.price)}</div>
                      <button className="button primary">
                        Add To Cart
                      </button>
                    </div>
                    </div>
                </li>))):(null)}
            </ul>
        </div>
    );
};

export default Products;
