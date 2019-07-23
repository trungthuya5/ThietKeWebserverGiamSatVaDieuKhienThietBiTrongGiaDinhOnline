const jwt = require('jsonwebtoken')

function ensureToken(req,res,next){

    if (req.headers && req.headers.auth) {
        jwt.verify(req.headers.auth, 'd-auth',function(err, decode) {
            if (err) res.send(403);
            req.user = decode;
            next();
          });
      } else {
        return res.send(403)
      }
}

module.exports = {
    ensureToken: ensureToken
}