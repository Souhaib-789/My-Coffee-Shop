import React, { createContext, useReducer } from 'react';
import  reducer  from './Reducer';


export const CartContext = createContext();


export default function ContextFunction({ children }) {

   const initialState={
     showCart : false ,
     cartItems : []
   }

const [state , dispatch] = useReducer(reducer, initialState);

const addToCart = item =>{
    dispatch({
        type : 'ADD_TO_CART',
        payload : item
    })
    alert(item.title + ' added to cart')
}

const showHideCart =()=>{
    dispatch({
        type: 'SHOW_HIDE_CART'
    })
}

const removeItem = (id)=>{
    dispatch({
        type : 'REMOVE_ITEM',
        payload: id
    })
}

 //increment the item
 const increment=(id)=>{
    return dispatch({
        type : "INCREMENT",
        payload : id,
    })
}

//decrement the item
const decrement=(id)=>{
    return dispatch({
        type : "DECREMENT",
        payload : id,
    })
}

    return (
        <CartContext.Provider value={{
            showCart: state.showCart,
            cartItems: state.cartItems,
            addToCart,
            showHideCart,
            removeItem,
            increment,
            decrement
        }} >
            {children}
        </CartContext.Provider>

    );
}