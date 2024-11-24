import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    user:null ,
    isAuthenticated: false
}

const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        userGetLoggedIN:  (state ,action) =>{
            state.user = action.payload.user;
            state.isAuthenticated= true
        },
        userGetLoggedOut :(state) =>{
          state.user= null,
          state.isAuthenticated=  false

        }

    }

})

export  const {userGetLoggedIN , userGetLoggedOut} = authSlice.actions;
export default authSlice.reducer;