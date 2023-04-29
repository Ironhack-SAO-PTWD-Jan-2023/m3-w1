const http = require('http');
const server = http.createServer(
  (request, response) => {
    console.log(`Alguém pediu a url: ${request.url}`);
    if(request.url === '/'){
      response.write('Hello, world!');
      response.end();
    } else if(request.url === '/about') {
      response.write(`
      <html>
        <body>
          <h1>Oi, eu sou o DK!</h1>
        </body>
      </html>
      `);
      response.end();
    } else {
      response.statusCode = 404;
      response.write('404 Não encontrado!');
      response.end();
    }
    
  }
);
server.listen(3000);