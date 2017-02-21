const greeting = require('./greeting');

test('falcor-routes:greeting - get', () => {
  const message = 'We ♥ Falcor';
  const route = greeting(message)[0];
  const results = route.get();
  expect(results).toEqual({ path: ['greeting'], value: message });
});
