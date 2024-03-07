import mongoose, {Schema} from 'mongoose'

const userSchema = new Schema(
    {
        userType: {
            type: String,
            enum: ['customer','manager'],
            default: 'customer'
        },

        email:{
            type: String,
            required: false,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },

        phoneNo: {
            type: Number,
            required: false,
            unique: true,
            trim: true
        },

        name: {
            type: String,
            require: true,
            trim: true,
            index: true
        },

        address: {
            type: String,
            require: true,
            trim: true
        },

        password: {
            type: String,
            require: [true,"Password is required"],
            minLength: [8,"Password should be greater than 8 characters"]
        },

        cart: {
            items: [
                {
                  productId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true
                  },
                  quantity: { type: Number, required: true }
                }
              ]
        }
    },   
    {
        timestamps: true
    }
)

export const User = mongoose.model("User", userSchema)