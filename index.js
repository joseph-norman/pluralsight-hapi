
'use strict';

/**
 * index.js
 *
 * Contains our first version of the MBI API for consumers
 * to operate against.
 *
 */

// Load in Hapi & the local manifest configuration
const Hapi = require('hapi');

// Load in our data stubs (change to persistence layer?)
const users = require('./stub/users');
const user = require('./stub/user');
const newUser = require('./stub/newUser');

// Create a new instance of the Hapi server object
const server = new Hapi.Server();
const apiPrefix = '/api/users'

server.connection({
  port: 1337,
  labels: ['api']
});

// Route configuration here
server.route([
  {
    method: 'GET',
    path: apiPrefix,
    handler: (request, reply) => {
      reply(users);
    }
  },
  {
    method: 'GET',
    path: apiPrefix + '/{userId}',
    handler: (request, reply) => {
      reply(user);
    }
  },
  {
    method: 'POST',
    path: apiPrefix,
    handler: (request, reply) => {
      reply(newUser);
    }
  }
]);


server.start(() => {
  console.log('Server running at:', server.info.uri);
});

// get [/api/users]
// get [/api/users/{id}]
// post [/api/users]
// put [/api/users/{id}]
// delete [/api/users/{id}]
