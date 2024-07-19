const jwtWebToken = require("jsonwebtoken")
const User = require("../model/user.model")

const addUser = async (req, res) => { 
    const check = await User.findOne({ email: req.body.email })
    if (check)
        return res.status(400).send({ success: false, message: "user already exists" })
    
    let cart = {}
    for (let i = 0; i < 300; i++){ 
      cart[i]=0
    }
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cart:cart
    })
    await user.save()
   
    const data = {
        user: {
            id:user.id
        }
    }

    const token = jwtWebToken.sign(data, 'secret_ecom')
    res.send({success:true,token})
}

const loginUser = async (req, res) => { 
    const user = await User.findOne({ email: req.body.email })
    if (user) { 
        const compare = req.body.password === user.password
        if (compare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwtWebToken.sign(data, 'secret_ecom')
            res.send({ success: true, token })
        } 
        else { 
            res.status(400).send({success:false,message:"wrong password"})
        }
    }
    else {
        res.send({success:false,message:"wrong email id"})
    }
}

module.exports = {addUser,loginUser}