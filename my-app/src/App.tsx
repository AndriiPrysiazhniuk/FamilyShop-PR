import React from 'react';
import './App.css';
import {ProductItem} from "./components/ProductItem";
import {AlternativeItem} from "./components/AlternativeItem";

function App() {
    return (
        <div className="App">
            <header>
                <div className={'headerInner'}>
                    <div className={'logo'}>
                        <b>Natas</b>Shop
                    </div>
                    <div className={'busket'}>
                        Корзина
                    </div>
                </div>
            </header>
            <div className="container">
                <div className={'alternativeItemContainer'}>
                    <AlternativeItem/>
                    <AlternativeItem/>
                    <AlternativeItem/>
                    <AlternativeItem/>
                    <AlternativeItem/>
                    <AlternativeItem/>
                </div>
                <div className={'productItemContainer'}>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                    <ProductItem/>
                </div>
            </div>
        </div>
    );
}

export default App;
