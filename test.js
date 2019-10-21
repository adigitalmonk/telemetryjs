const assert = require('assert');
const { Trigger, Handle } = require('.');

let Test1 = false;
let Test2 = false;
const testPayload = "testString";

Handle('test', () => {
    Test1 = true;
});
Handle('test', (payload) => {
    Test2 = true;
    assert.equal(testPayload, payload);
});

Promise.all(Trigger('test', testPayload)).then(() => {
    assert(Test1);
    assert(Test2);
});
