import {
    ACTION_NAP,
    ACTION_EAT,
    ACTION_PLAY,
    ACTION_SET_NAME,
} from './actionTypes';

export const nap = () => {
    return {
        type: ACTION_NAP,
    };
};

export const eat = () => {
    return {
        type: ACTION_EAT,
    };
};

export const play = () => {
    return {
        type: ACTION_PLAY,
    };
};

export const setName = (newName) => {
    return {
        type: ACTION_SET_NAME,
        payload: newName,
    };
};

// export const setActivity = (activity) => {
//     return {
//         type: ACTION_SET_ACTIVITY,
//         payload: {

//         }
//     }
// }
