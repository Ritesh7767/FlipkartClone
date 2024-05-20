import { createSlice } from "@reduxjs/toolkit";

const ShoeProvider = createSlice({
    name : "shoeProvider",
    initialState : [],
    reducers : {
        GET_DATA(state, action){
            state = action.payload
        },
        ASCENDING(state, action){
            state.sort((a, b) => a.price - b.price)
        },
        DESCENDING(state){
            state.sort((a, b) => b.price - a.price)
        },
        BRAND(state, action){
            state.filter(shoe => shoe.title == action.payload)
        }
    }
})

export const {GET_DATA, ASCENDING, DESCENDING, BRAND} = ShoeProvider.actions
export default ShoeProvider.reducer