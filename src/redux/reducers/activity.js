import { ACTION_SET_NAME } from '../actionTypes';

const initialState = {
    name: 'Guster',
    activity: 'napping',
};

const activityReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_NAME: {
            return {
                ...state,
                name: action.payload,
            };
        }
        default:
            return state;
    }
};

export default activityReducer;
