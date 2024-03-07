import { Product } from "../models/product.model.js";
import { sendResponseError } from "../middlewares/middleware.js";

// Admin Route
const createProduct = async(req,res,next)=>{
    const product = await Product.create(req.body)
    console.log(req.body);
    res.status(201).json({
        success: true,
        product,
    })
}

const getProducts = async(req,res,next) => {
    const products = await Product.find()
    console.log(products)
    res.status(200).json({
        success: true,
        products
    })
}

// update product
const updateProduct = async(req,res,next)=>{
    let product = await Product.findById(req.params.id)
    console.log(product)
    if(!product){
        return sendResponseError(400,"Product doesn't exist",res)
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})

    return res.status(200).json({
        success: true,
        product
    })
}

const deleteProduct = async(req,res,next)=>{
    const productID = req.params.id

    let product = await Product.findById(productID)
    
    if(!product){
        return sendResponseError(404,"Product doesn't exist",res)
    }

    await Product.findByIdAndDelete(product)

    return res.status(201).send("Product Deleted Successfully")
}

export{
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
}