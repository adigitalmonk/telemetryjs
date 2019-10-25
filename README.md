# TelemetryJS

Inspired by https://github.com/beam-telemetry/telemetry (but not nearly as nice).

## Purpose

There's nothing terribly novel about this implementation.
Instead, the goal is to simply have a repeatable pattern for how to handle logging.
Though admittedly, this could be used for much more than just logging.

The idea is in your application, import the `Trigger` function and use it to "announce" an event.

e.g,

```javascript
// src/lib/controllers/login.js
const { Trigger } = require('telemetryjs');

module.exports = (req, res) => {
    const userId = loginUser(req);
    Trigger('user-login', userId);
};
```

Once you've done that, now you can implement what to do for that event in another location.

```javascript
// src/lib/logging/login.js
const { On } = require('telemetryjs');

On('user-login', (userId) => {
    console.log(`User with {userId} has logged in.`);
});
```

Now you can separate your logging logic and requirements from your business logic and requirements.

There is also the ability to customize what to do if an event is triggered but not properly handled.

```javascript
const { NoEventHandler } = require('telemetryjs');

NoEventHandler((event) => {
    console.log("The event", event, "happened but there was nothing to handle it.");
});
```

Now you'll definitely be aware if you had intended to log everything but missed some events!

## Usage

### Register an Event
Add your events like so.

```javascript
On('test', () => {
    console.log("This is my test event!");
});

On('test', (payload) => {
    console.log("This is a test event with some payload", payload);    
});
```

### Trigger an Event
Trigger the event at the appropriate point.
Currently, only one thing can be sent to the events.
You'll need to use an object to pass multiple things.

```javascript
Trigger('test', 'somePayload');
```

## TODO:
- Ability to pass an arbitrary number of arguments to event handlers
- Better tests
