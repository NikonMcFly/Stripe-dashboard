const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
// const passport = require('passport')
const api = require('./routes/api/stripe')



app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


app.use(express.static('dist'));

app.use('/api', api);

app.listen(8080, () => console.log('Listening on port 8080!'));
