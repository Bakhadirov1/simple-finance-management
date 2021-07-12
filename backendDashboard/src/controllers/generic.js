

const CRUD = (model) => ({

    
    async getAll(req, res) {
        const items = await model.find();
        return res.status(200).send(items);

    },
    async Create({body}, res) {
        try {
            console.log(body)
            const item = new model(body);
            const newItem = await item.save();
            return res.status(200).send(newItem);
        } catch (error) {
            console.log(error)
            if (error.code == 11000) {
                message = "User with such login already exists!"
                res.status(400).send({error, message})
            }
            else {
                res.status(400).send(error)
            }
            
        }
        
    },
    async Update(req, body, res) {
        const item = await model.findByIdAndUpdate(req.user.id, body, { new: true, useFindAndModify: false})
        return res.send(`Updated object with id: ${req.user.id} \n ${item}`)
    },
    async Delete({ params: { id }}, res) {
        await model.findOneAndDelete({_id: id} );
        console.log(id)
        return res.status(200).send('ok');

    },
})





module.exports = CRUD