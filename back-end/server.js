const express = require('express');
const cors = require('cors');

app = express();
port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);

console.log('Listening on PORT: ' + port);