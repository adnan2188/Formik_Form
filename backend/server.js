import express from "express";
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import {notFound, errorHandler} from './middlewares/errorMiddleware.js'
import AuthRoutes from './routes/authRoutes.js'
import cookieParser from "cookie-parser";
dotenv.config()

const PORT = process.env.PORT || 1234
const app = express();

//DB Connection
connectDB()



app.use(express.json())
app.use(cookieParser())


//routes
app.use('/api/auth', AuthRoutes)
// app.use('/api', UserRoutes)


app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`app is listing to ${PORT}`)
})


