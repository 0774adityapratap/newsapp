import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count:0
}

const counterSlice = createSlice({
    name:'conterrr',
    initialState:initialState,
    reducers:{
        incement:function(state){
            state.count++;
        },
        decment:function(state){
            state.count--;
        },
        reset:function(state){
            state.count=0;
        }
    }
})


export default counterSlice.reducer;
export const {incement,decment,reset} = counterSlice.actions;