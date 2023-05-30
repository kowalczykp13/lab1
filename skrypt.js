const http = require('http');

const server = http.createServer((req, res) => {
  // Retrieve client IP address information
  const clientIP = req.connection.remoteAddress;

  // Get the current date and time in the client's time zone
  const clientTime = new Date().toLocaleString('pl-PL', {
    timeZone: 'Europe/Warsaw'
  });

  // View information in the client's browser
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Adres IP klienta: ${clientIP}</h1>`);
  res.write(`<p>Data i godzina w strefie czasowej klienta: ${clientTime}</p>`);
  res.end();
});

const port = 8080; // Set port

server.listen(port, () => {
  const authorName = 'Piotr Kowalczyk';
  console.log(`Serwer uruchomiony. Autor: ${authorName}`);
  console.log(`Serwer nasłuchuje na porcie ${port}`);
});
