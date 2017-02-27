require('babel-core/register');
require('babel-polyfill');
const { APOD, COPYRIGHT, DATE, EXPLANATION, HDURL, MEDIA_TYPE, TITLE, URL } = require('./fields');
const apod = require('./apod');
const image = require('./sample-image');
const video = require('./sample-video');

const samples = [{ type: 'image', data: image }, { type: 'video', data: video }];


const route = apod('TEST_KEY')[0];

describe('happy path', () => {
  samples.forEach((sample) => {
    describe(`sample data "${sample.type}"`, () => {
      fetch.mockResponse(JSON.stringify(sample.data));

      test('route.route to match snapshot', () => {
        expect(route.route).toMatchSnapshot();
      });

      [DATE, COPYRIGHT, EXPLANATION, HDURL, MEDIA_TYPE, TITLE, URL].forEach((field) => {
        test(`route.route to contain "${field}"`, () => {
          expect(route.route).toContain(field);
        });

        test(`route.get(${JSON.stringify([APOD, [field]])}) to match snapshot`, async () => {
          const results = await route.get([APOD, [field]]);
          expect(results).toMatchSnapshot();
        });

        test(`route.get(${JSON.stringify([APOD, [field]])}) to be defined`, async () => {
          const results = await route.get([APOD, [field]]);
          expect(results[0].value).toBeDefined();
        });
      });
    });
  });
});

describe('special case', () => {
  test(`route.get(${JSON.stringify([APOD, [URL]])}) not to contain HTTP protocol`, async () => {
    const results = await route.get([APOD, [URL]]);
    expect(results[0].value).not.toContain('http:');
    expect(results[0].value).not.toContain('https:');
  });
});

describe('exception', () => {
  const BAD_FIELD = 'bad_field';
  test(`route.get(${JSON.stringify([APOD, [BAD_FIELD]])}) to match snapshot`, async () => {
    const results = await route.get([APOD, [BAD_FIELD]]);
    expect(results).toMatchSnapshot();
  });

  test(`route.get(${JSON.stringify([APOD, [DATE]])}) to match snapshot`, async () => {
    fetch.mockResponse('I\'m not a JSON');
    const results = await route.get([APOD, [DATE]]);
    expect(results).toMatchSnapshot();
  });
});
