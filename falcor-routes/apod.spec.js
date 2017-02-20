require('babel-core/register');
require('babel-polyfill');

const apod = require('./apod');
const apodSample = require('./apod-sample');

fetch.mockResponse(JSON.stringify(apodSample));

const scenarios = [
  {
    pathSet: ['apod', ['explanation', 'url']],
    length: 2
  },
  {
    pathSet: ['apod', ['explanation']],
    length: 1
  },
  {
    pathSet: ['apod', ['url']],
    length: 1
  }
];

scenarios.forEach((scenario) => {
  describe('given apod route', () => {
    const route = apod('TEST_KEY')[0];

    describe(`when pathSet === "${JSON.stringify(scenario.pathSet)}"`, () => {
      it(`then results.length === "${scenario.length}"`, async () => {
        const results = await route.get(scenario.pathSet);
        expect(results.length).toBe(scenario.length);
      });
    });
  });
});

test('exception', async () => { // info: I am not sure why Jest is not displaying this test
  fetch.mockResponse('I\'m not a JSON');
  const route = apod('TEST_KEY')[0];
  const results = await route.get(['apod', ['url']]);
  expect(results.length).toBe(0);
});
