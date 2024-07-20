const express = require("express")
const mongoose = require("mongoose")
const multer = require("multer")
const jsonWebToken = require("jsonwebtoken")
const cors = require("cors")
const path = require("path")
const dotenv = require("dotenv")
dotenv.config()
// const userRouter = require("./routes/users.routes")
const Product = require("./model/phone.model")

const port = 4000 || process.env.PORT;
const app = express();  
app.use(express.json());
app.use(cors());
// const router = require("./routes/products.routes.js");
const { addProduct,allProducts,removeProduct} = require("./controller/products.controller")
const { addUser,loginUser} = require("./controller/users.controllers")

const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

const upload = multer({storage: storage})
app.use("/images",express.static("./upload/images"))

app.post("/upload", upload.single("product"), (req, res) => {
    res.json({ 
        seccess:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    }) 
});

app.get("/", (req, res) => {
    res.send(`express app running`)
});

// products CRUD
app.post("/addProduct", addProduct);
app.get("/allProducts", allProducts);
app.post("/removeProduct", removeProduct);
 // app.use("/products", router);

//SIGNUP LOGIN
app.post("/signup", addUser);
app.post("/login", loginUser);
    (async function () {
        try {
            await mongoose.connect(`mongodb+srv://akibbagwan69:akibbagwan96@cluster0.f6gp0ov.mongodb.net/`)
            console.log(`connected to database mongodb+srv://akibbagwan69:akibbagwan96@cluster0.f6gp0ov.mongodb.net/`)
        } catch (error) {
            console.log(error)
        }
    })();

app.listen(port, () => {
    console.log(`server is listening to port : ${port}`)
});

