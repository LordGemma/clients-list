import * as ActionTypes from '../actions/actionTypes';

const initialState = {
    users: [],
    user: {},
    filteredUsers: []
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
                user: action.user
            }
        case ActionTypes.FILTERED_USERS:
            return {
                ...state,
                filteredUsers: action.users
            }
        default: 
            return state;
    }
}