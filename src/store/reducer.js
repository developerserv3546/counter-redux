import {v4 as uuid} from 'uuid';
import {
    ACTION_ADD_COUNTER,
    ACTION_DECREASE_RANGE,
    ACTION_DECREMENT,
    ACTION_DELETE_COUNTER,
    ACTION_INCREASE_RANGE,
    ACTION_INCREMENT,
    ACTION_RESET_ALL_COUNTERS,
    ACTION_RESET_COUNTER
} from "./actionTypes";

export const reducer = (state = [createCounter()], action) => {
    switch (action.type) {
        case ACTION_ADD_COUNTER:
            return addCounter(state);
        case ACTION_DELETE_COUNTER:
            return deleteCounter(state, action.payload);
        case ACTION_INCREMENT:
            return increment(state, action.payload);
        case ACTION_DECREMENT:
            return decrement(state, action.payload);
        case ACTION_RESET_COUNTER:
            return resetCounter(state, action.payload);
        case ACTION_RESET_ALL_COUNTERS:
            return resetAllCounters(state);
        case ACTION_INCREASE_RANGE:
            return increaseRange(state, action.payload);
        case ACTION_DECREASE_RANGE:
            return decreaseRange(state, action.payload);
        default:
            return state;
    }
};

const createCounter = () => ({
        id: uuid(),
        currentValue: 0,
        range: [1, 2, 3]
    }
);

const addCounter = state => [...state, createCounter()];

const deleteCounter = (state, id) => {
    return state.filter((counter) => counter.id !== id);
};

const increment = (state, payload) => {
    return state.map(counter => {
        if (counter.id === payload.id) {
            counter.currentValue += payload.v;
        }
        return counter;
    })
};

const decrement = (state, payload) => {
    return state.map(counter => {
        if (counter.id === payload.id) {
            counter.currentValue -= payload.v;
        }
        return counter;
    })
};

const resetCounter = (state, id) => {
    return state.map(counter => {
        if (counter.id === id) {
            counter.currentValue = 0;
        }
        return counter;
    })
};

const resetAllCounters = state => state.map(counter => {
    counter.currentValue = 0;
    return counter;
});

const increaseRange = (state, id) => state.map(counter => {
    if (counter.id === id) {
        if (counter.range.length < 10) {
            counter.range.push(counter.range.length + 1);
        }
    }
    return counter;
});

const decreaseRange = (state, id) => state.map(counter => {
    if (counter.id === id) {
        if (counter.range.length > 1) {
            counter.range.pop();
        }
    }
    return counter;
});