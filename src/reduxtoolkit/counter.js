import { createSlice } from "@reduxjs/toolkit";


const initialState={
    val:0
}
 const counterSlice=createSlice({
    name:"counterr",
    initialState,
    reducers:{
        Counterincr:(state,action)=>{
            state.val=state.val+1
        }
    }


})
