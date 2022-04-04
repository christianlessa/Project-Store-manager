require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/productsRoutes');
const salesRoutes = require('./routes/salesRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/products', productsRoutes.router);
app.use('/sales', salesRoutes.router);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
