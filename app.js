const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./api/usersRouter');
const mongoose = require('mongoose');

const port = process.env.port || 3000;

const app = express();
app.use('/myapp', userRouter);

app.use(bodyParser.json());

// setup mongoose connection
mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch(error => {
    console.log(`Initial Connection Error: ${error}`);
})
const database = mongoose.connection;
database.once('open', () => {
    console.log('Connected to Mongo DB!')
}).catch((error) => {
    console.log(`Connection Error: ${error}`)
});


app.listen(port, () => {
    console.log(`Running at port ${port}!`)
});