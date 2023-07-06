import { compare } from "bcrypt";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken';

export const registerController = async(req, res) => {
    try {
        const {name, email, password, phone, address} = req.body;

        // Validation
        if(!name){
            return res.send({error: 'Name is Required'})
        }

        if(!email){
            return res.send({error: 'Email is Required'})
        }

        if(!password){
            return res.send({error: 'Password is Required'})
        }

        if(!phone){
            return res.send({error: 'Phone is Required'})
        }

        if(!address){
            return res.send({error: 'Address is Required'})
        }

        // Check User
        const existingUser = await userModel.findOne({email})

        // Existing User
        if(existingUser){
            return res.status(200).send({
                success:true,
                message:'Already registered. Please login.'
            })
        }

        // Hash Password
        const hashedPassword = await hashPassword(password);

        // Save
        const user = await new userModel({name, email, phone, address, password:hashedPassword}).save();
        res.status(201).send({
            success:true,
            message: 'User registered successfully',
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in registration',
            error
        })
    }
};

// Post Login
export const loginController = async(req, res) => {
    try {
        const {email, password} = req.body;

        // Validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid email or password'
            })
        }

        // Check User
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not registered'
            })
        }

        const match = await comparePassword(password, user.password)

        // Checking password
        if(!match){
            return res.status(200).send({
                success:false,
                message:'Invalid password'
            })
        }

        // Token
        const token = await JWT.sign({_id:user._id}, 
            process.env.JWT_SECRET, 
            {expiresIn: '7d'},
            );
        
            res.status(200).send({
                success:true,
                message:'Login successfully',
                user:{
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    address: user.address,
                },
                token,
            })

    } catch (error) {
        console.log(500).send({
            success:false,
            message:'Error in login',
            error
        })
    }
};

// Test Controller
export const testController = (req, res) => {
    console.log('Protected Route');
    res.send("Protected Rout");
}