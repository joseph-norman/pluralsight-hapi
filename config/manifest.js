
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
