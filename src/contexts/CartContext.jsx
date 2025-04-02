import {createContext, useReducer} from "react";
import {ADD_TO_CART} from "../utils/constant";

const CartContext = createContext();

/*
- Cart context save:
+ id product, quantity for each
+ total quantity
 */
const initialCart = {products:[], total:0};
const cartReducer = (state, action) => {
    switch (action.type) {

        case ADD_TO_CART: {
            /*
            * - Add id and quantity to products array
            * if id exists in products array, increase quantity by 1
            * if id does not exist in products array, add a new object with id and quantity 1
            * - Calculate total quantity
            * */
            const existingItem = state.products.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity +=1

                return {
                    total: state.total + 1,
                    products: state.products,
                };
            } else {
                return {

                    total: state.total + 1,
                    products: [...state.products, { id: action.payload.id, quantity: 1 }]
                };
            }
        }
        default:
            return state;
    }
};
function CartProvider({children}) {
    const [state, dispatch] = useReducer(cartReducer, initialCart);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
}

export {CartContext, CartProvider}