const GREETING = 'greeting';

const routes = () => (
  [
    {
      route: GREETING,
      get: () => ({ path: [GREETING], value: 'Hello from Falcor' })
    }
  ]
);

module.exports = routes;
