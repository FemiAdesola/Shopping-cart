import React from "react";
import { connect, useDispatch} from 'react-redux';
import { 
    filterProducts,
    sortProducts
 } from '../store/action/productActions';

 const Filter = ({ products, size, sort, filteredProducts,sortProducts}) => {
    const dispatch = useDispatch();
    return (
        !filteredProducts ?(
        <div>Loading....</div>
        ):(
        <div className="filter">
           
            <div className="filter-sort">
            Order{" "}
            <select
                value={sort}
                onChange={(e) => dispatch(sortProducts(filteredProducts, e.target.value))}    
            >
                <option value="latest">Latest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
            </select>
                </div>
            <div className="filter-size">
                Filter {" "}
                <select
                    value={size}
                    onChange={(e) => dispatch(filterProducts (products, e.target.value))}
                >
                    <option value="">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            
            </div>
            <div className="filter-result">
                {filteredProducts.length} Products
            </div>
        </div>
        )
    );
};

// export default Filter;

export default connect(
    (state) => ({
      size: state.products.size,
      sort: state.products.sort,
      products: state.products.items,
      filteredProducts: state.products.filteredItems,
    }),
    {
        filterProducts,
        sortProducts,
      }
  )(Filter);