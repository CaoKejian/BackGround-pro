const jwt = require('jsonwebtoken')
const secret = 'colin-anydata'
const JWT  = {
  generate(val,expires){
    return jwt.sign(val,secret,{expiresIn:expires})
  },
  verify(token){
    try{
      return jwt.verify(token,secret)
    }catch(e){
      return false
    }
  } 
}
module.exports = JWT