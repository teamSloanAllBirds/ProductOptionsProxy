const express = require('express');
const jquery = require('jquery');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, public)));
app.use(bodyparser.urlencoded({
  extended: true,
}));
app.use(bodyparser.json());

// probably use a modified get method here to pass in params.id and then pass that down to each of the functions in client/index.js???

app.list(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
