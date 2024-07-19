const mongoose = require("mongoose")

const Product = mongoose.model("Product", {
    company: {
        type: String,
    },
    modelNo: {
        type: String,
    },
    description: {
        type:String,
    },
    image: {
        type: String,
    },
    gb: {
       type:String
    },
    colour: {
        type: String
    }, 
    warranty: {
        type:String
    },
    accessories: {
        type:String
    },
    price: {
        type: Number,
    },
});

module.exports = Product