import express from "express"
import dotenv from "dotenv"
import connectDb from "./utils/db.js"
dotenv.config({})
import userRoute from "./routes/ruote.user.js"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
const port= 8000 || process.env.PORT

connectDb()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.get("/" , (req ,res) => {
 res.send("hello world ")
    
})
app.use("/api/user" , userRoute)
app.listen(port , () =>{
    console.log(`exmaple listening app on ${port}`);
    
})