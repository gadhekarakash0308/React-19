import { createSlice } from "@reduxjs/toolkit"

const initialState={
    items: localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[]
}

const addToCart=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
            localStorage.setItem('cart',JSON.stringify(state.items));
            console.log(action)
        },
        removeItem:(state,action)=>{
            const removeItem=state.items.filter((items)=>items.id!=action.payload.id)
            state.items=removeItem
          
             localStorage.setItem('cart',JSON.stringify(removeItem));
        },
        clearItem:(state)=>{
            state.items = []
        }
    }

})

export const {addItem,removeItem,clearItem}=addToCart.actions;
export default addToCart.reducer;