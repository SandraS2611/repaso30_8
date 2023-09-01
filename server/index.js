const http = require("node:http");

const server = http.createServer((request, response) => {
//Desde aqui soluciona el error
    response.setHeader('Access-Control-Allow-Origin', '*');
response.setHeader('Access-Control-Request-Method', '*');
response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
response.setHeader('Access-Control-Allow-Headers', '*');
if ( request.method === 'OPTIONS' ) {
    response.writeHead(200);
    response.end();
    return;
}
//Hasta aqui

response.write("Respuesta del Servidor: SANDRA")
response.end()
}).listen(4000)