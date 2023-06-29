const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const employeeSchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    // cpassword:{ 
    //     type:String,
    //     required:true,
    // },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    age:{
        type:Number,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },

    admin:{
        type:Boolean,
        default:false,
        required:false
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]

})


employeeSchema.methods.generateAuthToken = async function(){
    try{

        const token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY)
        console.log(' this is the genrated token for the login/register\n', token, "\n")

        this.tokens = this.tokens.concat({token:token})
        await this.save()
        return token

    }catch(err){
        console.log("Error in the genrateAuth")
        console.log(err)
    }
}




employeeSchema.pre('save', async function(next ){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12)
    }
    next()
})



const Register = mongoose.model('Register', employeeSchema)

module.exports = Register
