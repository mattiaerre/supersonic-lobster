const GREETING = 'greeting';

const routes = greeting => (
  [
    {
      route: GREETING,
      get: () => ({ path: [GREETING], value: greeting })
    }
  ]
);

module.exports = routes;
