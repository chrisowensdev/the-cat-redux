import {
    ACTION_SET_NAME,
    ACTION_SET_ACTIVITY,
    ACTION_ADD_CAT,
} from './actionTypes';

export const setName = (newName) => {
    return {
        type: ACTION_SET_NAME,
        payload: newName,
    };
};

export const setActivity = (activity) => {
    return {
        type: ACTION_SET_ACTIVITY,
        payload: activity,
    };
};

export const addCat = (cat) => {
    return {
        type: ACTION_ADD_CAT,
        payload: {},
    };
};
