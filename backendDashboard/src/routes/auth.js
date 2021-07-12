const Router = require('express').Router;
const authMethods = require('../controllers/auth.controller');
const customer = require('../models/customer');
const authMiddleware = require('../middlewares/auth.middleware')

let router = Router();


// This route is used for test
// router.get('/', (req, res) => {
//     console.log("CONNECTED TO MAIN ROUTE")
// })

router.get('/users', authMiddleware, authMethods(customer).getUsers);

router.post('/login', authMethods(customer).login);

router.post('/register', authMethods(customer).regiser);



module.exports = router