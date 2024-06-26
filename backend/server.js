require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

const port = 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));