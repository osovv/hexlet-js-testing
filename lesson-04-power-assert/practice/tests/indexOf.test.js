// @ts-check

import assert from "power-assert";
import getFunction from "../functions.js";

const indexOf = getFunction();

// BEGIN (write your solution here)

assert(indexOf([1, 2, 3], 1) === 0);
assert(indexOf([1, 2, 3], 2) === 1);
assert(indexOf([1, 2, 3], 3) === 2);

assert(indexOf([1, 2, 3], 1, 1) === -1);
assert(indexOf([1, 2, 3], 1, 2) === 0);
assert(indexOf([1, 2, 3], 1, 3) === 1);

// END
