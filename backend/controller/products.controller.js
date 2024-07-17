// const ProductServices = require("../services/products.services")
// const ProductServicesInstance = new ProductServices()
const Product = require("../model/phone.model")
const fs = require("fs")

const addProduct = async (req, res) => {
    // try {
    //     const { name, description, price } = req.fields 
    //     const { image } = req.files
        
    //     switch (true) { 
    //         case !name:
    //             return res.status(500).send({ message: "name is required" })
    //         case !description:
    //             return res.status(500).send({ message: "description is required" })
    //         case image && image.size > 1000:
    //             return res.status(500).send({ message: "please provide compressed image within 1mb" })
    //         case !price:
    //             return res.status(500).send({message:"price is required"})
    //     }
        
    //     const products = new Product({ ...req.fields })
    //     if (image) { 
    //         products.image.data = fs.readFileSync(image.path)
    //         products.image.contentType = image.type
    //     }
    //     await products.save()
    //     res.status(201).send({
    //         success: true,
    //         message:"Product created",
    //         products,
    //     })
    // } catch (error) {
    //     console.log(error)
    // }
    const product = new Product({
        company: req.body.company,
        modelNo:req.body.modelNo,
        description: req.body.description,
        image: req.body.image,
        gb: req.body.gb,
        colour: req.body.colour,
        warranty: req.body.warranty,
        accessories:req.body.accessories,
        price: req.body.price,
    })   
    await product.save()
    console.log(product)
    res.json({
        success: true,
        name: product.name
    })
};

const allProducts = async (req, res) => {
    try {
    const getAllProducts = await Product.find({})
        if (getAllProducts === null)
            return res.send({message:"something went wrong!"})
        res.send(getAllProducts)
    } catch (error) {
        res.send({message:"something went wrong!"})
    } 
};

const removeProduct = async (req, res) => { 
    try {
    const removeCurrProduct = await Product.findOneAndDelete({ _id: req.body.id })
        if (removeCurrProduct === null) { 
          return res.send({ message: "item already deleted" }) 
        }
        res.json({
        success: true,
        message : "item removed"
    })
    } catch (error) {
        res.send({message:"Product id doesnt exist"})
    }
}

// const deleteProduct = async (req, res) => {
//     try {
//     const { id } = req.params;
//     const result = await ProductServicesInstance.deleteProduct(id);
//     res.json(result);
//     } catch (error) {
//         res.status(500).json({
//             message:"couldn't delete product,try again later!",error
//         })
//     }
// };



 module.exports = {addProduct,allProducts,removeProduct}