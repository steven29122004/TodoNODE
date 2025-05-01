const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const Router = require('./modules/router');


app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', Router);

app.listen(port, () => {
    console.log(`server running on ${port}`);
})