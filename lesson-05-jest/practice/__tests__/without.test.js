// @ts-check

import getFunction from "../functions.js";
const without = getFunction();

// BEGIN (write your solution here)

test("without", () => {
  expect(without([1, 2, 3, 4, 5], 1, 2, 3, 4)).toEqual([5]);
  expect(without([1, 2, 3, 4, 4, 5], 1, 2, 3, 4)).toEqual([5]);
  expect(without([1, 2, 3, 4, 5], 1, 2, 3, 4, 5)).toEqual([]);
});

// END
