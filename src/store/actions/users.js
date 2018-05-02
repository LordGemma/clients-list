import { ALL_USERS } from "./actionTypes";
import { getUsers } from '../../services/services';

export const getAllUsers = () => {
    return dispatch => {
        getUsers()
            .then ( users => {
                dispatch({
                    type: ALL_USERS,
                    users: users
                })
            } )
            .catch ( error => {
                console.log(error);
            } )
    }
}

export const getUser = (id) => {
    return {
        type: SINGLE_USER,
        id: id
    }
}