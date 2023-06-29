const express = require('express')
const app = express();
const hbs = require('hbs')
const path = require('path')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const auth = require("./middleware/auth")
require("dotenv").config()
require("./db/conn")
const Register = require("./models/registers")


//import the colors
const colors = require('colors')

const port = process.env.PORT || 5000;

const static_path = path.join(__dirname, "../public/")
app.use(express.static(static_path))

app.set("view engine", "hbs")
app.set("views", path.join(__dirname,"templates/views"))
hbs.registerPartials(path.join(__dirname, "templates/partials"))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())


app.get("/", (req,res)=>{
    res.render("index")
})

app.get("/secret", auth, (req,res)=>{

    console.log(`This is the cookie ${req.cookies.jwt}`.yellow)
    res.render("secret")
});

app.get("/logout", auth, async(req,res)=>{
    //create this route
})


app.get("/register", (req,res)=>{
    res.render("register")
})



app.post("/register", async(req,res)=>{
    try{

        if( req.body.password != req.body.cpassword){
            res.send("password not matching")
        }
        else{
            const registerEmployee = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password,
                // cpassword: req.body.cpassword,
                phone: req.body.phone,
                age: req.body.age,
                gender: req.body.gender
            })

            const token = await registerEmployee.generateAuthToken()
            res.cookie("jwt", token,{
                expires:new Date(Date.now() + 60000),
                httpOnly:true,
                secure:true,
                sameSite:"none",
            })
            const registered = await registerEmployee.save();
            res.status(201).render("index")
        }

    }catch(error){
        res.status(400).send(error)
        console.log(error)
    }
})




app.get("/login", (req,res)=>{
    res.render("login")
})
app.post("/login", async (req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email:email})
        const isMatch = await bcrypt.compare(password, useremail.password)

        if(isMatch){
            const token = await useremail.generateAuthToken();

            res.cookie("jwt", token,{
                expires:new Date(Date.now() + 10000),
                httpOnly:true,
                sameSite:"none",
                secure:true,
            })

            res.status(201).render("index")
            console.log(`${email} and ${password} is a match`)
        }else{
            res.send("Invalid Login details")
        }
    }catch(e){
        console.log(e)
        res.status(400).send("Invalid Login Details 2")
    }
})


app.get("/",(req, res)=>{
    res.send("Hello from the other side")
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`.blue)
    console.log(`Listening to port ${port}`)
})
