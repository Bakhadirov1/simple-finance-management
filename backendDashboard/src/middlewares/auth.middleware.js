const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../cfg/env')

module.exports = function(req, res, next) {
    if(req.method === "OPTIONS") {
        next()
    }

    try {
        
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(403).json( { message: "User is not authorized" })
        }
        const decodedToken = jwt.verify(token, JWT_SECRET)
        req.user = decodedToken
        next()
    } catch (error) {
        console.log(error + "s")
        return res.status(403).json( { message: "User is not authorized" })
    }
}