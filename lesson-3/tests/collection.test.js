// @ts-check
import getFunction from '../functions.js';

const get = getFunction();

// BEGIN (write your solution here)

if (get({foo: 'bar'}, 'foo') !== 'bar') {
  throw new Error('case 1');
}


if (get({foo: 'bar'}, 'baz') !== undefined) {
  throw new Error('case 2');
}


if (get({foo: 'bar'}, 'baz', 'value') !== 'value') {
  throw new Error('case 3');
}

if (get({foo: 'bar'}, 'foo', 'value') !== 'bar') {
  throw new Error('case 4');
}




// END

