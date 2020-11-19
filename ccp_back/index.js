const express = require('express');
const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());

app.post('/main', require('./methods/main').main);
app.put('/add_wallets', require('./methods/add_wallets').main);
app.post('/transactions', require('./methods/transactions').main);


app.listen(4000, () => console.log('http://localhost:4000'));
