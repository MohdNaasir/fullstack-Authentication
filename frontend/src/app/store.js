 
import { configureStore } from "@reduxjs/toolkit";
 
import storeReducer from "./storeReducer";
import { authApi } from "@/features/api/authApi";
 
 

 export const appStore = configureStore({
    reducer:  storeReducer,
        middleware :(defaultMiddleware) => defaultMiddleware().concat(authApi.middleware)
    
    
});