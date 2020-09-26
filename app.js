const express = require('express');
const bodyParser = require('body-parser');
const studentsRouter = require('./api/studentsRouter');
const mongoose = require('mongoose');

const port = process.env.port || 3000;

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true,
}));


app.use('/students', studentsRouter);


// setup mongoose connection
mongoose.connect('mongodb://localhost:27017/students', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
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