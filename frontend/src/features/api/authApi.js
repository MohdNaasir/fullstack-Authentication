import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const User_Get_Api = "http://localhost:8000/api/user/";

 export const authApi = createApi({
   reducerPath: "authApi",
   baseQuery:fetchBaseQuery({
    baseUrl:  User_Get_Api ,
    credentials: "include",


   }),
   endpoints: (builder) =>({
    getRegisterUser : builder.mutation({
    query: (getIputData) => ({
                url:"register",
                method: "POST",
                body:getIputData 
    })
}),
    getLoginUser : builder.mutation({
    query: (getIputData) =>({
                url:"login",
                method: "POST",
                body:getIputData 
    }),
    async OnQueryStarted(arg, {queryFulfilled ,dispath}){

        try {
            const result = await queryFulfilled;
             dispath(  userGetLoggedIN({user:result.data.user}))


        } catch (error) {
            console.log(error);
            
            
        }
    }
}),
   })

 })

 export const  { useGetRegisterUserMutation ,useGetLoginUserMutation} = authApi