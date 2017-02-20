const apod = require('./apod');

require('babel-core/register');
require('babel-polyfill');
require('dotenv').config();

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
    const route = apod(process.env.NASA_API_KEY)[0];
    describe(`when pathSet === "${JSON.stringify(scenario.pathSet)}"`, () => {
      it(`then results.length === "${scenario.length}"`, async () => {
        const results = await route.get(scenario.pathSet);
        expect(results.length).toBe(scenario.length);
        // todo: add check against results objects
      });
    });
  });
});
