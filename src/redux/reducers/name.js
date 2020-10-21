import { ACTION_SET_NAME } from '../actionTypes';

const initialState = {
    cats: {
        1001: {
            name: 'Beans',
            activity: 'meowing',
        },
        1002: {
            name: 'Bandit',
            activity: 'eating',
        },
    },
};

const catReducer = (state = initialState, action) => {
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

export default catReducer;
