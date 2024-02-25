# Guide
Pastikan sudah menginstall [Node.Js](https://nodejs.org/en/). Karena web server yang dibuat menggunakan Node.JS

## Menjalankan Web Server
Terdapat 2 Web Server yang ada, dengan `http` module dari node, yaitu `server.js`, dan menggunakan [Express](https://expressjs.com/) yaitu `express.js`

Untuk menjalankan `server.js`, cukup dengan command
> node server.js \
> \# atau jika sudah menginstall nodemon\
> nodemon server.js  

Untuk menjalankan `express.js`, jalankan perintah berikut terlebiih dahulu
> npm install

Setelah selesai, jalankan perintah
> node express.js \
> \# atau jika sudah menginstall [nodemon](https://npmjs.com/package/nodemon)\
> nodemon express.js

## Mencoba Methods
Untuk mencoba methods yang ada, dapat menggunakan web browser, perintah `curl`, maupun [Postman](https://www.postman.com/downloads/)

### Dengan Web Browser
Cukup ketikkan saja `http://localhost:8000/` di pencarian, maka akan muncul method GET yang ada

### Dengan perintah `curl`
Buka terminal di desktop, lalu ketikkan command berikut
> curl -X \<nama metode\> http://localhost:8000

### Dengan Postman
Buka aplikasi Postman, buat HTTP request baru, lalu masukkan `http://localhost:8000/` di kolom URL, pilih method yang dipakai di sebelah kiri, lalu **Send**