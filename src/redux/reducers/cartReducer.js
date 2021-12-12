
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const cartReducer = (state, action) => {
    if(state === undefined){
        state ={
            cartItems: []
        }
    }
    switch (action.type) {
        case ADD_TO_CART:
            return{
                ...state,
                cartItems: [...state.cartItems, action.product]
            }
        case REMOVE_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(item => {
                    return item.id !== action.product.id
                })
            }
        default:
            return state
    }
}

export default cartReducer