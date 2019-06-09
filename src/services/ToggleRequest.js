import axios from 'axios';

const baseURL = "https://murmuring-hamlet-24337.herokuapp.com/";

export function createToggle(name, value, applicationId, callback) {
    const body = {
        applicationId,
        toggleName: name, 
        toggleValue: value
    }
    console.log(body);
    axios.post(`${baseURL}v1/toggle-service/toggle/add`, body)
        .then(response => {
            callback(response);
        })
        .catch(_ => {
            callback(undefined);
        });
}