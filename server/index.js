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
app.use('/api/images/:product_id', createProxyMiddleware({ target: 'http://104.131.12.156/', changeOrigin: true}));
app.use('/api/midpageimages/:id', createProxyMiddleware({ target: 'http://167.172.249.193:7000/', changeOrigin: true}));
app.use('/api/productoptions/:id', createProxyMiddleware({ target: 'http://3.17.57.123:3001/', changeOrigin: true }));
app.use('/api/productreviews/:reviewId', createProxyMiddleware({ target: 'http://18.222.126.35:4000/', changeOrigin: true}));

app.get('/:id', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../public')});
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
