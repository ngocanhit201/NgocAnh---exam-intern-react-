import {useContext, useEffect, useState} from "react";
import {CartContext} from "../contexts/CartContext.jsx";
//
import {countItems} from "../utils/utils.js";
import  {getDataById} from "../data/useData.js";
export default function Cart() {

    const cartContext = useContext(CartContext);
    const [cartItems, setCartItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    console.log(cartContext.state);
    useEffect(()=>{
        let cartProduct = cartContext.state.products.map(i =>{
            let product = {...getDataById(i.id)};
            product.quantity = i.quantity;
            return product;
        })
        setCartItems(cartProduct);
        setTotalItems(cartContext.state.total);
        // setTotalItems()cartItems.reduce((sum, item) => {return sum + item.quantity}, 0);
    },[cartContext.state.total])
    return (
        <div className="text-right">
            <button className="">
                <div className="flex justify-center items-center relative">
                    <div>
                        <p>Giỏ hàng</p>
                    </div>
                    <div>

                        <svg className="fill-primary" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M351.9 329.506H206.81l-3.072-12.56H368.16l26.63-116.019-217.23-26.04-9.952-58.09h-50.4v21.946h31.894l35.233 191.246a32.927 32.927 0 1 0 36.363 21.462h100.244a32.825 32.825 0 1 0 30.957-21.945zM181.427 197.45l186.51 22.358-17.258 75.195H198.917z" data-name="Shopping Cart" /></svg>
                    </div>
                    <div className="w-[30px] h-[30px] rounded-full bg-red-400 flex justify-center items-center absolute -top-[28px] -right-[30px] ">
                        <p className="text-sm">{totalItems}</p>

                    </div>
                </div>
            </button>
        </div>
    )
}