const weather = require('../js/logic');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('tests if user inputs a string', () => {
  expect(str(input.valid)).toBe(true);
});

test('tests if we get a response from the api', () => {
  expect(weather.responseApi()).toBe(200);
});

test('tests if the is a response from music API', () => {
  expect(weather.responseApi()).toBe(200);
});
