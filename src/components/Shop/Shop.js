import React, { useState } from 'react';
import fakeData from "../../fakeData/products.js"
import Product from '../product/Product.js';
import Cart from '../Cart/Cart.js';
import "./shop.css"


const Shop = () => {
    const data = JSON.parse(fakeData);
    const first10 = data.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product)=>{
        //console.log("Clicked", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    // console.log(first10);
    return (
        <div className='shop-container'>
            <div className='product-container'>
                    {
                        products.map( product => {
                            return (
                                <Product handleAddProduct = {handleAddProduct} product = {product}></Product>
                            );
                        })
                    }
                
            </div>
            <div className='cart-container'>
                    <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;