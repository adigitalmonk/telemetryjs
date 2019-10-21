# TelemetryJS
Inspired by https://github.com/beam-telemetry/telemetry (but not nearly as nice).

## Usage

### Register an Event
Add your events like so.

```javascript
Handle('test', () => {
    console.log("This is my test event!");
});

Handle('test', (payload) => {
    console.log("This is a test event with some payload", payload);    
});
```

### Trigger an Event
Currently, only one thing can be sent to the events.

```javascript
Trigger('test', 'somePayload');
```

## TODO:
- Ability to pass an arbitrary number of arguments to event handlers
- Ability to customize event storage
- Better tests
