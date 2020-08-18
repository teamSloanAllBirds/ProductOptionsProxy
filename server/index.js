const express = require('express');
const jquery = require('jquery');
const path = require('path');
const bodyparser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../public/')));
app.use(bodyparser.urlencoded({
  extended: true,
}));
app.use(bodyparser.json());
app.use('/api/images/:product_id', createProxyMiddleware({ target: 'http://localhost:5000/', changeOrigin: true}))
app.use('/api/productoptions/:id', createProxyMiddleware({ target: 'http://localhost:3001/', changeOrigin: true }));
app.use('/api/productreviews/reviews', createProxyMiddleware({ target: 'http://localhost:4000/', changeOrigin: true}));


// probably use a modified get method here to pass in params.id and then pass that down to each of the functions in client/index.js???

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
