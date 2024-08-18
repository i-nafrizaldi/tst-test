const {sortArrayAsc,sortArrayDesc} = require("../sortArray")


test("sorts array in ascending order", () => {
  expect(sortArrayAsc([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
});

test("sorts array in descending order", () => {
  expect(sortArrayDesc([5, 3, 8, 4, 2])).toEqual([8, 5, 4, 3, 2]);
});
