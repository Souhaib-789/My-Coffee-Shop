const reducer = (state, action) => {
    switch (action.type) {
      case 'SHOW_HIDE_CART': {
        return {
          ...state,
          showCart: !state.showCart,
        };
      }
      case 'ADD_TO_CART': {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
         
        };
      }
      case 'REMOVE_ITEM': {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload
          ),
        };
      }
    //   case 'INCREMENT' : {
    //     let updatedCart = state.item.map((currElem)=>{
    //       if( currElem.item.id ===action.payload)
    //       {
    //           return {...currElem, quantity : currElem.quantity +1};
              
    //       }
    //       return currElem;
    //   });
    //   return {...state , item : updatedCart};
    //   }

    //   case 'DECREMENT' :{
    //     const updatedCart= state.item.map((currElem)=>{
    //       if(currElem.item.id === action.payload)
    //       {
    //           return {...currElem, quantity: currElem.quantity -1}
    //       }
    //       return currElem;
    //   }).filter((currElem)=>   currElem.quantity != 0 )
    //   return { ...state, item : updatedCart};
    //   }
  
      default:
        return state;
    }
  };

export default reducer;

