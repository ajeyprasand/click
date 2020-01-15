const express = require('express');
const app = express();

const PORT = 1234;

var data = require('./package.json');

app.get('/info', (req, res) => {
  res.send({ serverName: data.name, serverVersion: data.version });
});

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
