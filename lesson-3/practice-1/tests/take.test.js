import { strict as assert } from "assert";
import getFunction from "../functions.js";

const take = getFunction();

// BEGIN (write your solution here)
assert.strict.deepEqual(take([1, 2, 3]), [1]);
assert.strict.deepEqual(take([1, 2, 3], 100), [1, 2, 3]);
assert.strict.deepEqual(take([1, 2, 3], 3), [1, 2, 3]);
assert.strict.deepEqual(take([1, 2, 3], 2), [1, 2]);
assert.strict.deepEqual(take([1, 2, 3], 1), [1]);
assert.strict.deepEqual(take([1, 2, 3], 0), []);
assert.strict.deepEqual(take([], 100), []);
assert.strict.deepEqual(take([], -100), []);
assert.strict.deepEqual(take([1, 2, 3], -100), []);
assert.strict.deepEqual(take([1, 2, 3], -1), []);
// END
