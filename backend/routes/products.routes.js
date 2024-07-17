const express = require("express")
const router = express.Router()
const { addProduct, deleteProduct, allProducts } = require("../controller/products.controller")

router.post("/addproduct", addProduct)
router.get("/allproducts",allProducts)
router.delete("/:id",deleteProduct)

module.exports = router