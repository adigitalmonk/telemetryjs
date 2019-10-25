const EventEmitter = require('events');
const Telemetry = new EventEmitter();

let NoHandler = Function.prototype;

const NoEventHandler = (func) => {
    NoHandler = func;
};

const On = function OnEvent(event_trigger, func) {
    Telemetry.on(event_trigger, func);
}

const Trigger = function TriggerEvent(event_trigger, data) {
    const eventsTrigger = Telemetry.emit(event_trigger, data);
    if (!eventsTrigger) {
        NoHandler(event_trigger);
    }
}

const Once = function HandleOnce(event_trigger, func) {
    Telemetry.once(event_trigger, func);
};

module.exports = {
    NoEventHandler,
    Trigger,
    On,
    Once
};
