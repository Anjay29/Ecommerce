import express from "express"
const app = express()
const PORT = 8080
// import cors from "cors"
// import cookieParser from "cookie-parser"

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))

app.use(express.json())

import userRouter from "./routes/user.routes.js"
app.use("/api/v1",userRouter)

import productRouter from "./routes/product.routes.js"
app.use("/api/v1",productRouter)

export {app}


