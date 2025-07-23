const express = require('express');

const app = express();

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.use(express.static('public'));
app.use(express.json());

app.use(userRoutes);
app.use(productRoutes);
app.use(cartRoutes);

app.use('/', (req, res) => {
    res.status(404).send(`<h1>404 : Page not found</h1>`)
})

app.listen(3000);
