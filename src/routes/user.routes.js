import { Router } from "express"
import { registerUser, loginUser, addToCart} from "../controllers/user.controllers.js"

const router = Router()
router.post("/user",registerUser)
router.get("/login",loginUser)
router.post("/addToCart",addToCart)
export default router