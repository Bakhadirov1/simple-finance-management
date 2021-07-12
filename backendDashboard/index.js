const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const dburl = 'mongodb+srv://otabek:otabek2001@cluster0.hkrky.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const API_customers = require('./src/routes/customer.route')
const API_operationType = require('./src/routes/operationType.route')
const pages = require('./src/routes/auth')


mongoose.connect(dburl,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

const PORT = 5000;
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/customers', API_customers)
app.use('/api/operationsType', API_operationType)
app.use('/auth', pages)








app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})