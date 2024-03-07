import {User} from "../models/users.model.js";
import { sendResponseError } from "../middlewares/middleware.js";


const registerUser = async(req,res,next) => {
    const {name,email,userType,phoneNo,address,password} = req.body;
    console.log(req.body);  
    if([name,email||phoneNo,address,password].map(e=>{if(e.trim()!=="")return e}).includes(undefined)){
        return sendResponseError(400,"All fields are required",res)
    }

    const existedUser = await User.findOne({
        $or: [{email},{phoneNo}]
    })

    if(existedUser){
       return sendResponseError(409,"User already exist",res)
    }

    const user = await User.create({
        name,
        email,
        phoneNo,
        address,
        password,
        userType,
    })

    return res.status(201).send('Successfully registered')
}

const loginUser = async(req,res,next)=>{
    const {email,phoneNo,password} = req.body

    console.log(req.body);

    if(!(email || phoneNo)){
       return sendResponseError(400,"Email or Mobile No. is require",res)
    }

    const user = await User.findOne({
        $or: [{email},{phoneNo}]
    })

    if(!user){
        return sendResponseError(404,"You have to signUp first")
    }

    function checkPassword(pass1,pass2){
        if(pass1 === pass2){
            return true;
        }
    
        return sendResponseError(402,"Password is incorrect",res)
    }

    const isPasswordValid = await checkPassword(password,user.password)

    if(!isPasswordValid){
        return sendResponseError(401,"Invalid Password")
    }

    return res.status(200).send("Logged In successfully")
}

// const logoutUser = async(req,res,next){

// }

const addToCart = async(req,res,next)=>{
    const user = await User.findById(req.body._id);
    console.log(user);
    user.cart=[...user.cart,req.body.cart];
    user.save();
    res.status(202).json({updatedUser});
}

export {
    registerUser,
    loginUser,
    addToCart
}