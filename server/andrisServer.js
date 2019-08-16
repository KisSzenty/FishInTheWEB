const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3210;
const GetHandler = require('./module/gethandler')

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  switch (req.method.toLowerCase()) {
    case 'get': new GetHandler(req, res);
      break;
    default: res.end('Invalid method');
  }
});

server.listen(port, () => {
  console.log(`server is listening on port: ${port}.`);

});