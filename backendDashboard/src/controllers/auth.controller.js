const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../cfg/env')

const generateAccessToken = (id, username) => {
    const payload = {
        id,
        username
    }

    return jwt.sign(payload, JWT_SECRET, { expiresIn: "24h"})
}

const authentification = (customer) => ({
    async login(req, res) {
        try {
            const { Login, Password } = req.body;
            const user = await customer.findOne({ Login });
            if (!user) {
                return res.status(400).json( { message: `There is no user with ${Login} login`})
            }
            const validPassword = bcrypt.compareSync(Password, user.Password)
            if(!validPassword) {
                return res.status(400).json( { message: `Password is incorrect`})
            }

            const token = generateAccessToken(user._id, user.Login)
            return res.json({token})
        } catch (error) {
            
        }
    },

    async regiser(req, res) {
        try {
            const { Login, Password, Name, Surname } = req.body;
            const candidate = await customer.findOne({Login});
            if (candidate) {
                return res.status(400).json({message: 'User is already registered'});
            }
            const hashPassword = bcrypt.hashSync(Password, 7);
            const user = new customer({Login, Password: hashPassword, Name, Surname});
            await user.save()
            return res.json({ message: 'User has been registered' })
        } catch (error) {
            console.log(error)
        }
    },

    async getUsers(req, res) {
        try {
            res.send("sdfds")
        } catch (error) {
            
        }
    }
})

module.exports = authentification