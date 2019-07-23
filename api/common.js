const jwt = require('jsonwebtoken')

function ensureToken(req,res,next){
    if (req.headers && req.headers.auth) {
      console.log(req.headers.auth)
        jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9."+req.headers.auth, 'd-auth',function(err, decode) {
            if (err) return res.send({status:false,msg:"Token không tồn tại"})
            req.user.id = decode.id
            req.user.id = decode.level
            console.log(req.user)
            console.log(decode)
            next();
          });
      } else {
        return res.send({status:false,msg:"Token không tồn tại1"})
      }
}

module.exports = {
    ensureToken: ensureToken
}