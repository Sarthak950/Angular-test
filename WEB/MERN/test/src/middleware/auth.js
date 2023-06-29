const jwt = require('jsonwebtoken');
const Register = require('../models/registers');

const auth = async (req, res, next)=>{

    try{

        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY)
        console.log(verifyUser)
        next()

    }catch(error){
        console.log("no acces to the secret page")
        // console.log(error)
       res.render("login") 
        // res.status(401).send(error)
    }

}

module.exports = auth;
