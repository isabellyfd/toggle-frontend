import axios from 'axios';

const baseURL = "https://murmuring-hamlet-24337.herokuapp.com/";

export function createToggle(name, value, applicationId, callback) {
    const body = {
        applicationId,
        toggleName: name, 
        toggleValue: value
    }
    axios.post(`${baseURL}v1/toggle-service/toggle/add`, body)
        .then(response => {
            callback(response);
        })
        .catch(_ => {
            callback(undefined);
        });
}

export function fetchAllToggles(applicationId, callback) {
    axios.get(`${baseURL}v1/toggle-service/toggles/${applicationId}`)
        .then(response => {
            const toggles = response.data;
            callback(toggles);
        })
        .catch(_ => {
            callback(undefined);
        });
}

export function updateToggleValue(id, name, value, applicationId, callback) {

    const body = {
        applicationId,
        toggleId: id,
        toggleName: name, 
        toggleValue: value
    }
    axios.post(`${baseURL}v1/toggle-service/toggle/update`, body)
        .then(response => {
            callback(response);
        })
        .catch(_ => {
            callback(undefined);
        });
}