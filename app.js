const express = require('express');
const router = require('./router/index')

const app = express();
const PORT = 3000;

app.use('/', router);
app.listen(PORT, () => {
  console.log('Plactice Task');
});