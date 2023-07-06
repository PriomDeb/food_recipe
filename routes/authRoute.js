import express from 'express';
import {registerController, loginController} from '../controllers/authController.js';

// Router Object
const router = express.Router()

// Routing
// Register || Method Post
router.post('/register', registerController)

// Login || Post
router.post('/login', loginController)

export default router