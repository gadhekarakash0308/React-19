import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct=createAsyncThunk('Product',async()=>{
    const resp=await fetch("https://dummyjson.com/products");
    const data=await resp.json();
    return data.products;
})
const initialState={
    item:[],
    status:null,
    error:null
}
const productSlice=createSlice({
    name:'productSlice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.status="Successed";
            state.item=action.payload;
        })
    }
})

export default productSlice.reducer