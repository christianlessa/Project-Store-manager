require('dotenv').config();
const express = require('express');
<<<<<<< HEAD
const productsRoutes = require('./routes/productsRoutes');
const salesRoutes = require('./routes/salesRoutes');
const middleError = require('./middlewares/error');
=======
const bodyParser = require('body-parser');
const routes = require('./controllers/routes');
>>>>>>> parent of e578c0ea... Requisito 2 concluido - Tratando sales - Models, services, controllers and routes

const app = express();

app.use(express.json());

<<<<<<< HEAD
app.use('/products', productsRoutes);
app.use('/sales', salesRoutes);

app.use(middleError);
=======
app.use('/products', routes.productRouter);
>>>>>>> parent of e578c0ea... Requisito 2 concluido - Tratando sales - Models, services, controllers and routes

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
