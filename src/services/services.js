import axios from 'axios';

export function getUsers() {
    return new Promise((resolve, reject) => {
        axios.get(`/users.json`)
            .then(({data}) => {
                resolve(data);
            })
            .catch(function (error) {
                reject(error);
            });
    })
}