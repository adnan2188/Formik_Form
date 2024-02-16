import express from "express";
import {Register} from '../controllers/AuthController.js'


const router = express.Router()


router.post('/register', Register)
// router.post('/login', Login)

export default router
