import React from "react";
import './ProductItem.css'
import spoon2 from "../images/spoon-2.jpg";

export const ProductItem = () => {
    return (
        <div className="product-item modern">
            <img className="product-image" src={spoon2} alt=""/>
            <h2>S P O O N</h2>
            <p className="product-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate dolor ex in numquam
                perspiciatis, quo reiciendis repellat repudiandae sit!
            </p>
            <span><b>Price - 420💲</b></span>
            <div>
                <button className="quantity-button">-</button>
                <input type="text" className="quantity-input" value={0}/>
                <button className="quantity-button">+</button>
            </div>
            <button className="add-to-cart-button">Add to Cart</button>
        </div>
    );
}
