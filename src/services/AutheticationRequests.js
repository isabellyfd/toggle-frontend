import axios from 'axios';

const baseURL = "https://murmuring-hamlet-24337.herokuapp.com/";

export function signUp(email, password, callback) {
    const body = {
        email, 
        password
    }

    axios.post(`${baseURL}v1/toggle-service/create-user/`, body)
        .then(response => {
            const data = response.data;
            const userId = data.user.uid;
            callback(userId);
        })
        .catch(_ => {
            callback(undefined);
        });
}