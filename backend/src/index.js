const express = require('express'); //pacote
const cors = require('cors')
const routes = require('./routes'); //arquivo

const app = express();

app.use(cors());
app.use(express.json()); //Avisa ao express que vai converter o JSON em objetoJS
app.use(routes);

app.listen(3333);