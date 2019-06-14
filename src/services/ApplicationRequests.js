import axios from 'axios';

const baseURL = "https://murmuring-hamlet-24337.herokuapp.com/";

const wasRequestSuccessful = (data) => data.includes("successfully");

export function createNewApplication(name, userId, callback) {
    const body = {
        name, 
        userId
    }
    axios.post(`${baseURL}v1/toggle-service/create-application/`, body)
        .then(response => {
            const data = response.data;
            callback(wasRequestSuccessful(data));
        })
        .catch(_ => {
            callback(undefined);
        });
}

export function fetchAllApplications(userId, callback) {
    axios.get(`${baseURL}v1/toggle-service/my-apps/${userId}`)
        .then(response => {
            const applications = response.data;
            callback(applications);
        })
        .catch(_ => {
            callback(undefined);
        });
}