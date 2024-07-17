// const Product = require("../model/phone.model")

// class ProductServices { 
//     save = async (doc) => {
//     const result = await doc.save();
//     return result;
//     };
    
//     addProducts = async (body) => { 
//         const newProduct = new Product(body);
//         const savedProduct = await this.save(newProduct)
//         return savedProduct
//     }

//     deleteProduct = async (id) => { 
//         const deletedDoc = await Product.findOneAndDelete({_id : id});
//     return deletedDoc;
//     }
    
//     allProducts = async () => { 
//         const allProducts = await Product.find({})
//         return allProducts
//     }
// }

// module.exports = ProductServices