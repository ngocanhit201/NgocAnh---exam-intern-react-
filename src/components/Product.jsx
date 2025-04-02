import {formatVND} from "../utils/utils.js";
import {useContext} from "react";
import {CartContext} from "../contexts/CartContext.jsx";
import {ADD_TO_CART} from "../utils/constant.js";


export default function Product({id, name, price, image}) {

    const cartContext = useContext(CartContext);

    /*
    * Add new item to cart context
    * */
    function addToCart() {
        cartContext.dispatch({type: ADD_TO_CART, payload: {id: id}});

    }

    return (
        <div className="h-full product hover:bg-bg-button transition-all duration-200 p-2 rounded-md flex flex-col">
            <div>
                <div className="w-full flex justify-center items-center aspect-square rounded-md overflow-hidden">
                    <img className="w-full h-full object-cover" src={image} alt={name} title={name}/>
                </div>

            </div>
            <div className="flex  flex-col xs:flex-row     justify-between xs:items-center  py-3 grow">
                <div className="text-left">
                    <p className="font-medium">{name}</p>
                    <p className="text-xs">{formatVND(price)} VND</p>
                </div>
                <div className='w-full xs:w-auto py-1'>

                    <button
                        className="w-full xs:w-[70px] xs:h-[50px] !p-0 flex justify-center items-center rounded-md bg-primary "
                        onClick={addToCart}>
                        <svg className="fill-primary" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24">
                            <path
                                d="M8,3V7H21l-2,7H8v2H18a1,1,0,0,1,0,2H7a1,1,0,0,1-1-1V4H4A1,1,0,0,1,4,2H7A1,1,0,0,1,8,3ZM6,20.5A1.5,1.5,0,1,0,7.5,19,1.5,1.5,0,0,0,6,20.5Zm9,0A1.5,1.5,0,1,0,16.5,19,1.5,1.5,0,0,0,15,20.5Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )


}