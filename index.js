
var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply({
        	data: {
        		id: 'ok',
        		type: 'response'
        	}
        });
    }
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});


// get [/api/users]
// get [/api/users/{id}]
// post [/api/users]
// put [/api/users/{id}]
// delete [/api/users/{id}]
