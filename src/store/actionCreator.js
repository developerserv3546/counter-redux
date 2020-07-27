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

export const addCounter = () => ({type: ACTION_ADD_COUNTER});
export const deleteCounter = (payload) => ({type: ACTION_DELETE_COUNTER, payload});
export const increment = (payload) => ({type: ACTION_INCREMENT, payload});
export const decrement = (payload) => ({type: ACTION_DECREMENT, payload});
export const resetCounter = (payload) => ({type: ACTION_RESET_COUNTER, payload});
export const resetAllCounters = () => ({type: ACTION_RESET_ALL_COUNTERS});
export const increaseRange = (payload) => ({type: ACTION_INCREASE_RANGE, payload});
export const decreaseRange = (payload) => ({type: ACTION_DECREASE_RANGE, payload});