<<<<<<< HEAD
module.exports = {
  server: {
    connections: [
      {
        port: 1337,
        labels: ['api']
      }
    ]
  }
}
=======

const config = require('./config');

const goodOptions = {
  reporters: [
    {
      reporter: require('good-console'),
      args: [{ response: '*', log: '*', error: '*', response: '*'}]
    }
  ]
}

const manifest = {
  connections: [
    {
      host: config.host,
      port: config.port,
      labels: ['api']
    }
  ],
  plugins: {
    good: goodOptions
  }
};

export manifest;
>>>>>>> 3581ae702c1ac48766d0748a52eb4a6e2332b90e
