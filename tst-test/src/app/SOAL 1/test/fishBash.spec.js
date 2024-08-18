const  printNumbers  = require('../fishBash');

test('prints numbers with specific conditions', () => {
  console.log = jest.fn();

  printNumbers(15);

  expect(console.log).toHaveBeenCalledTimes(15);
  expect(console.log).toHaveBeenCalledWith("fish");
  expect(console.log).toHaveBeenCalledWith("bash");
  expect(console.log).toHaveBeenCalledWith("fish bash");
});
