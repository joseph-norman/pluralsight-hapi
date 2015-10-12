
var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 3000 });

server.register({
	register: require('@gar/hapi-json-api'),
	options: {}
}, function(err) {
	if (err) {
		throw err;
	}
});

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
// get [/api/user/{id}]
// post [/api/users]
// put [/api/users]
// delete [/api/users]