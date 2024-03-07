import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({
        name:{
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true,
            trim: true
        },

        weight: {
            type: String,
            required: true,
            trim: true,
        },
        
        quantity: {
            type: Number,
            required: true,
            defalut: 0
        },

        price: {
            type: Number,
            required: true
        },

        productImage: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Product = mongoose.model("Product", productSchema)