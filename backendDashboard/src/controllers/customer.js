const CRUD = require('./generic')
const customer = require('../models/customer')




module.exports = {
    ...CRUD(customer),
    async getOne(req, res) {
        const id = req.user.id
        const item = await customer.findOne({_id: id}).populate('Operations').lean()
        const operations = item.Operations
        const Len = Object.keys(operations).length
        for (let index = 0; index < Len; index++) {
            const dat = new Date(item.Operations[index].Date).toLocaleString();
            Object.assign(item.Operations[index], {stringDate: dat})
            console.log(item.Operations[index])
        }
        return res.status(200).send(item)
    }
}