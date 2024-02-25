const http = require('http');

http.createServer(function (req, res) {
  const method = req.method;
  const params = req.params;
  res.setHeader('Content-Type', 'text/html');

  switch (method) {
    case 'GET':
      res.write('<html><body><h1>Mengambil resource dari server...</h1></body></html>');
      break;
    case 'POST':
      res.write('Posting resource baru ke server');
      break;
    case 'PUT':
      res.write('Mengubah resource');
      break;
    case 'DELETE':
      res.write('Menghapus resource...');
      break;
    default:
      res.write('Metode tidak disupport...');
      break;
  }

  res.end();
}).listen(8000);

console.log('Web server berjalan di port 8000');