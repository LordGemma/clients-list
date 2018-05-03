import { ALL_USERS, SINGLE_USER } from "./actionTypes";
import { getUsers } from '../../services/services';

export const getAllUsers = () => {
    return dispatch => {
        getUsers()
            .then ( users => {
                const userList = users.map( ( item, index ) => {
                    const userId = (guid() + guid() + "-" + guid() + "-4" + guid().substr(0,3) + "-" + guid() + "-" + guid() + guid() + guid()).toLowerCase(); 
                    return {
                        ...item,
                        id: userId
                    };
                } )
                dispatch({
                    type: ALL_USERS,
                    users: userList
                });
                dispatch({
                    type: SINGLE_USER,
                    user: userList[0]
                });
            } )
            .catch ( error => {
                console.log(error);
            } )
    };

    function guid() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
}

export const getUser = (id, users) => {
    const user = users.find(item => {
        return item.id === id
    });
    return {
        type: SINGLE_USER,
        user: user
    }
}