
const assert = require('assert');
const add = require('./add');

assert.equal(3, add(1, 2));
assert.equal(5, add(1, 2, 2));
assert.equal(12, add(6, 2, 2, 2));
assert.equal(12, add([6, 2, 2, 2]), "Deve retornar 12");
