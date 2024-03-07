import { Router } from "express";
import { createProduct, getProducts, updateProduct, deleteProduct } from "../controllers/product.controllers.js";

const router = Router()
router.post("/product/new",createProduct)
router.get("/product", getProducts)
router.put("/product/:id",updateProduct)
router.delete("/product/delete/:id",deleteProduct)

export default router