import express from 'express';
import {
    registerController, 
    loginController, 
    testController} from '../controllers/authController.js';

import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

// Router Object
const router = express.Router()

// Routing
// Register || Method Post
router.post('/register', registerController)

// Login || Post
router.post('/login', loginController)

// Test Route
router.get('/test', requireSignIn, isAdmin, testController)

export default router