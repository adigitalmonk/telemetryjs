const Events = {};

const Handle = function HandleEvent(event_trigger, func) {
    let Event = Events[event_trigger] || [];
    Event.push(func);
    Events[event_trigger] = Event;
}

const Trigger = function TriggerEvent(event_trigger, data) {
    let Event = Events[event_trigger] || [];
    return Event.map(func => {
        return new Promise((resolve, _reject) => {
            resolve(func(data));
        });
    });
}

module.exports = {
    Trigger,
    Handle
};
