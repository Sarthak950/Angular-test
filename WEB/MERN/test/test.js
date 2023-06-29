const jwt = require('jsonwebtoken')

const createToken = async()=>{
    const hash = await jwt.sign({_id:"6473459b2b886c6f55047b39"}, "qwertyuiopasdfghjklzxcvbnm")

    console.log(hash)
}

createToken()