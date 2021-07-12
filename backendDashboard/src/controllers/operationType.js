const CRUD = require('./generic')
const operationType = require('../models/operationType')
const customer = require('../models/customer');
const { divideDate } = require("../utils/functions")


module.exports = {
    ...CRUD(operationType),
    async Create(req, res) {
        const body = req.body;
        const userId = req.user.id;
        const user = await customer.findOne({_id: userId}).lean();
        const operation = new operationType(body);
        const operations = [];
        operation.User = userId;
        operation.BalanceBefore = user.Balance;
        if (operation.Type === "+") {
            operation.BalanceAfter = user.Balance + operation.Sum;
        }
        else if (operation.Type === "-") {
            operation.BalanceAfter = user.Balance - operation.Sum;
        }
        user.Balance = operation.BalanceAfter;
        await operation.save();
        const allOperationsOfUser =  await operationType.find({ User: userId});
        allOperationsOfUser.forEach( (element) => operations.push(element._id))
        const updatedUser = await customer.findByIdAndUpdate(userId, {Operations: operations, Balance: user.Balance}, {useFindAndModify: false, new: true});
        console.log(updatedUser)
        return res.status(200).send(updatedUser);
    },
    async getOne(req, res) {
        const operationId = req.params.operationId;
        const operation = await operationType.findOne({_id: operationId}).lean();
        operation.Date = new Date(operation.Date).toLocaleString()
        res.status(200).json(operation);
    }
}