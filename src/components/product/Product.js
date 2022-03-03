import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const product = props.product;
    const handleAddProduct = props.handleAddProduct;
    return (
        <div className='product'>
            <div> 
                <img src={product.img} alt="broken" />
            </div>
            <div>
                <h5 className='product-name'>{product.name}</h5>
                <br />
                <p><small>By: {product.seller}</small></p>
                <br />
                <p>${product.price}</p>
                <p><small>Only {product.stock} left Order soon</small></p>
                <button className='add-to-cart-button' onClick={() => handleAddProduct(product)}><FontAwesomeIcon icon={faCartPlus} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;