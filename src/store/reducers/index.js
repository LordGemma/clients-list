import * as ActionTypes from '../actions/actionTypes';

const initialState = {
    users: [],
    user: {}
}

export const users = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ALL_USERS:
            return {
                ...state,
                users: action.users
            };
        case ActionTypes.SINGLE_USER:
            return {
                ...state,
                user: state.users.filter((user, index, arr)  => {
                    return index === action.id;
                })
            }
        default: 
            return state;
    }
}