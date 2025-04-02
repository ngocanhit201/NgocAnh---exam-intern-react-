import {useContext, useEffect, useState} from "react";
import {CartContext} from "../contexts/CartContext.jsx";
//
import {getDataById} from "../data/useData.js";
import {formatVND} from "../utils/utils.js";
import CartProduct from "./CartProduct.jsx";

export default function Cart() {

    const cartContext = useContext(CartContext);
    const [cartItems, setCartItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [isShowTotal, setIsShowTotal] = useState(false);
    const [isShowCart, setIsShowCart] = useState(false);
    console.log(cartContext.state);
    useEffect(() => {
        let cartProduct = cartContext.state.products.map(i => {
            let product = {...getDataById(i.id)};
            product.quantity = i.quantity;
            return product;
        })
        setCartItems(cartProduct);
        setTotalItems(cartContext.state.total);
        cartContext.state.total > 0 ? setIsShowTotal(true) : setIsShowTotal(false);
    }, [cartContext.state.total])
    function handleShowCart () {
        setIsShowCart(!isShowCart);
    }
    return (
        <div className="text-right relative " >
            <button className="" onClick={handleShowCart}>
                <div className="flex justify-center items-center relative ">
                    <div>
                        <p>Giỏ hàng</p>
                    </div>
                    <div>

                        <svg className="fill-primary" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512">
                            <path
                                d="M351.9 329.506H206.81l-3.072-12.56H368.16l26.63-116.019-217.23-26.04-9.952-58.09h-50.4v21.946h31.894l35.233 191.246a32.927 32.927 0 1 0 36.363 21.462h100.244a32.825 32.825 0 1 0 30.957-21.945zM181.427 197.45l186.51 22.358-17.258 75.195H198.917z"
                                data-name="Shopping Cart"/>
                        </svg>
                    </div>
                    {isShowTotal &&
                        <div
                            className="w-[30px] h-[30px] rounded-full bg-red-400 flex justify-center items-center absolute -top-[20px] -right-[30px] ">
                            <p className="text-sm">{totalItems}</p>

                        </div>
                    }
                </div>
            </button>
            {isShowCart &&
                <div className='md:w-[450px] sm:w-[60vw] w-[80vw] ms-auto flex flex-col gap-4 absolute bg-bg-primary right-0 top-[120%] shadow-sm rounded-md p-4 '>
                <div className='flex flex-col gap-4  '>
                    {cartItems.map((item)=>{
                        return <div key={item.id} className=''>
                            <CartProduct id={item.id} name={item.name} image={item.image} price={item.price} quantity={item.quantity}/>
                        </div>
                    })}
                </div>
            </div>
            }
        </div>
    )
}