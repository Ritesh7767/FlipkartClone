import { configureStore } from "@reduxjs/toolkit";
import ShoeProvider from "./ShoeProvider";
import { shoeApi } from "./RTQuery";

const store = configureStore({
    reducer : {
        ShoeProvider,
        [shoeApi.reducerPath] : shoeApi.reducer
    },
    middleware : getDefaultMiddleware => getDefaultMiddleware().concat(shoeApi.middleware)
})

export default store