const express = require('express');
const app = express();
const port = 4000;

app.use(express.static(__dirname));
app.use(express.static('js'));
app.use(express.static('styles'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}/`);
});