const assert = require('assert');
const { On, Once, Trigger, NoEventHandler } = require('.');

// Ensure "Once" is "Once"
let OnceCheck = 0;
Once('once_check', () => { OnceCheck += 1; });
Trigger('once_check');
Trigger('once_check');
assert.equal(OnceCheck, 1);

// Ensure unhandled is properly handled
let UnhandledCheck = false;
Trigger('unhandled_check');
NoEventHandler((_eventTrigger) => {
    UnhandledCheck = true;
});
Trigger('unhandled_check');
assert.equal(UnhandledCheck, true);
NoEventHandler(Function.prototype);

// Generic Test
let Test1 = false;
On('test_it_works', () => {
    Test1 = true;
});
Trigger('test_it_works');
assert(Test1);

// Payload Test
let Test2 = false;
const testPayload = "testString";
On('test_payload', (payload) => {
    Test2 = true;
    assert.equal(testPayload, payload);
});
Trigger('test_payload', testPayload);
assert(Test2);
