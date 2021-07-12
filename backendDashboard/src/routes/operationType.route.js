const Router = require('express').Router
const operationType = require('../controllers/operationType')
const authMiddleware = require('../middlewares/auth.middleware')

const router = Router()

router.get('/', (req, res) => {
    operationType.getAll(req, res)
})

router.get('/:operationId', authMiddleware, (req, res) => {
    operationType.getOne(req, res)
})

router.post('/', authMiddleware, (req, res) => {
    operationType.Create(req, res)
})

router.put('/:id', (req, res) => {
    operationType.Update(req, req.body, res)
})

module.exports = router