import axios from 'axios';

export function getUsers() {
    axios.get(`/users.json`)
        .then(json => {
            console.log(json);
          })
        .catch(function (error) {
            console.log(error);
        });
}