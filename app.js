const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.port || 3000;

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('Running!')
});