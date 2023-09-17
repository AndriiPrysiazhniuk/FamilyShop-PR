import React from 'react';
import './AlternativeItem.css'
import spoon2 from "../images/spoon-2.jpg";

export const AlternativeItem = () => {
    return (
        <div className="border">
            <div className="wrap">
                <div className="product-wrap">
                    <a href=""><img src={spoon2} alt={'spoon_image'}/></a>
                </div>
                <div className="loop-action">
                    <div className="add-to-cart">Быстрый просмотр</div>
                    <div className="loop-add-to-cart">В корзину</div>
                </div>
            </div>
            <div className="product-info">
                <div className="stars"></div>
                <h3 className="product-title">Маленькое черное платье</h3>
                <div className="price"><span>&#8381; 1999</span> → <b>420</b></div>
            </div>
        </div>
    );
};
