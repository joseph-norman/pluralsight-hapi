'use strict';

const Hapi = require('hapi');
const config = require('./config/config');

let server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    reply({
    	data: {
    		id: 'ok',
    		type: 'response'
    	}
    });
  }
});

server.start(() => {
  console.log('Server running at:', server.info.uri);
});


// get [/api/users]
// get [/api/users/{id}]
// post [/api/users]
// put [/api/users/{id}]
// delete [/api/users/{id}]
