import axios from "axios";
import { error } from "../helper/notify.helper";

const http = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    responseType: "json",
    timeout: "30000",
    timeoutErrorMessage: "Server Time out"
});

export const postItem = (url, data, isStrict = false) => {
    // console.log('received', data)
    let headers = {};
    if (isStrict) {
        headers['authorization'] = localStorage.getItem('access_token');
    }
    return http.post(url, data, {
        headers: { ...headers }
    })
        .then((response) => {
            // console.log(response.data.message)
            if (response.data.status) {
                return response.data
            } else {
                error(response.data.message);
                return null;
            }
        })
        .catch((err) => {
            console.log("error in server", err);
            error(err)
        })
}


export const getItems = (url, isStrict = false) => {
    let headers = {};

    if (isStrict) {
        headers['authorization'] = localStorage.getItem('access_token');
    }

    return http.get(url, {
        headers: {
            ...headers
        }
    })
        .then((response) => {
            if (response.data.status) {
                return response.data;
            }
        })
        .catch((err) => {
            console.log(err);
            return null
        })
}

export const delItem = (url, isStrict = true) => {
    let headers = {};
    if (isStrict) {
        headers['authorization'] = localStorage.getItem('access_token');
    }

    return http.delete(url, {
        headers: {
            ...headers
        }
    })
        .then((response) => {
            if (response.data.status) {
                return response.data
            }
        })
        .catch((err) => {
            console.log(err);
            return null;
        })
}

export const uploadDataAndFile = (url, data, isStrict = true) => {
    let headers = {};
    if (isStrict) {
        headers['authorization'] = localStorage.getItem('access_token');
    }
    return http.post(url, data, {
        headers: {
            ...headers
        }
    })
        .then((response) => {
            if (response.data.status) {
                return response.data;
            }
            else {
                error(response.data.message);
                return null;
            }
        })
        .catch((err) => {
            console.log(err);
        })

}


export const updateDataAndFiles = (url, data, isStrict = true) => {
    console.log("hhtp data", data)
    let headers = {};
    if (isStrict) {
        headers['authorization'] = localStorage.getItem('access_token');
    }
    return http.put(url, data, {
        headers: {
            ...headers
        }
    })
        .then((response) => {
            if(response.data.status){
                return(response.data)
            }
            else{
                error(response.data.message);
                return null;
            }
        })
        .catch((err) => {
            console.log("eroor occured while updating", err)
        })

}