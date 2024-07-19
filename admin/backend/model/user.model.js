const mongoose = require("mongoose")

const User = mongoose.model("Users", {
    name: {
        type: String,
    },
    email: {
        type: String,
        unique:true
    },
    password: {
        type: String,
    },
    cart: {
        type:Object,
    },
    date: {
        type: Date,
        default:Date.now,
    },
});

module.exports = User