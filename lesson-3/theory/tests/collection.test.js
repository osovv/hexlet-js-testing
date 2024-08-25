// @ts-check
import getFunction from "../functions.js";
import { strict as assert } from "node:assert";
const get = getFunction();

// BEGIN (write your solution here)

assert.equal(get({ foo: "bar" }, "foo"), "bar");

assert.equal(get({ foo: "bar" }, "baz"), undefined);

assert.equal(get({ foo: "bar" }, "baz", "value"), "value");

assert.equal(get({ foo: "bar" }, "foo", "value"), "bar");

// END
