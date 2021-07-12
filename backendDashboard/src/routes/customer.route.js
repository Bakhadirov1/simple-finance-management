const Router = require('express').Router
const customerControllers = require('../controllers/customer')
const customer = require('../models/customer')
const auth = require('../controllers/auth.controller')
const authMiddleware = require('../middlewares/auth.middleware')

const router = Router()

router.get('/', (req, res) => {
    customerControllers.getAll(req, res)
})

router.get('/customer', authMiddleware, (req, res) => {
    customerControllers.getOne(req, res)
})

router.post('/', (req, res) => {
    auth(customer).regiser(req, res)
})

router.delete('/:id', (req, res) => {
    customerControllers.Delete(req, res)
})

router.put('/', authMiddleware, (req, res) => {
    customerControllers.Update(req, req.body, res)
})

module.exports = router