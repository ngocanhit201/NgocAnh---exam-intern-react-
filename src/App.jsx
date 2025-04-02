// react
import { useEffect, useState} from 'react';
// css
import './App.css'
// components
import Product from './components/Product';
import Cart from './components/Cart';
//data
import  {getData} from "./data/useData.js";
import {CartContext} from "./contexts/CartContext.jsx";
import {CartProvider} from "./contexts/CartContext.jsx";
import {ADD_TO_CART} from "./utils/constant.js";

function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(getData());
    },[])

    return (
        <main>
            <div className="">
                <div>
                    <Cart/>
                </div>
                <div className='grid grid-cols-3 gap-8 '>
                    {products.map((item) => (
                        <div key={item.id}>
                            <Product id={item.id} name={item.name} price={item.price} image={item.image} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

function App() {
    return (
        <CartProvider>
            <Home/>
        </CartProvider>
    )
}

export default App
