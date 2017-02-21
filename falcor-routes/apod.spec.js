require('babel-core/register');
require('babel-polyfill');

const apod = require('./apod');
const apodSample = require('./apod-sample-image');

fetch.mockResponse(JSON.stringify(apodSample));

const scenarios = [
  {
    pathSet: ['apod', ['date']],
    resultPath: ['apod', 'date'],
  },
  {
    pathSet: ['apod', ['explanation']],
    resultPath: ['apod', 'explanation'],
  },
  {
    pathSet: ['apod', ['media_type']],
    resultPath: ['apod', 'media_type'],
  },
  {
    pathSet: ['apod', ['url']],
    resultPath: ['apod', 'url'],
  }
];

scenarios.forEach((scenario) => {
  describe('given apod route', () => {
    const route = apod('TEST_KEY')[0];

    describe(`when pathSet === "${JSON.stringify(scenario.pathSet)}"`, () => {
      it(`then results[0].path === "${JSON.stringify(scenario.resultPath)}"`, async () => {
        const results = await route.get(scenario.pathSet);
        expect(results.length).toBe(1);
        expect(results[0].path).toEqual(scenario.resultPath);
      });
    });
  });
});

test('falcor-routes:apod - exception', async () => { // info: I am not sure why Jest is not displaying this test
  fetch.mockResponse('I\'m not a JSON');
  const route = apod('TEST_KEY')[0];
  const results = await route.get(['apod', ['url']]);
  expect(results.length).toBe(0);
});
