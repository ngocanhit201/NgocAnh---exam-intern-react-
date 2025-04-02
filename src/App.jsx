// react
import { useEffect, useState} from 'react';
// css
import './App.css'
// components
import Product from './components/Product';
import Cart from './components/Cart';
//data
import  {getData} from "./data/useData.js";
import {CartProvider} from "./contexts/CartContext.jsx";

function Home() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(getData());
    },[])

    return (
        <main>
            <div className="">
                {/* header */}
                <div className='fixed top-0 left-0 right-0  z-10 bg-bg-primary max-w-[1280px] mx-auto px-8 h-[80px] flex items-center justify-end'>
                    <Cart/>
                </div>
                {/* main */}
                <div className='grid grid-cols-2 md:grid-cols-3 gap-8 pt-[48px]'>
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
