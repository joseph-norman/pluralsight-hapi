
var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({ port: 3030 });

server.start(function() {
  console.log('Server started at:', server.info.uris);
});
