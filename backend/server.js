import express from "express";
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 1212
const app = express();

app.listen(PORT, () => {
    console.log(`app is up with ${PORT}`)
})