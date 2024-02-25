const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/posts', function (req, res) {
  res.send('Ini dia postnya...');
});

app.post('/', function (req, res) {
  res.send('Posting ke server');
});

app.put('/', function (req, res) {
  res.send('Mengubah resource di server');
});

app.delete('/', function (req, res) {
  res.send('Menghapus resource...')
});

app.use(function (req, res) {
  res.send('Metode tidak disupport');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});