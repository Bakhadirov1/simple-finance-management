import axios from 'axios'
import { GET_USER_URL, CREATE_USER_URL, UPDATE_USER_URL } from "../cfg";

const getUser = () => {
    const res = axios.get(GET_USER_URL, { headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
    }}).then( (response) => response);
    return res;
}

const createUser = (body) => {
        const res = axios.post(CREATE_USER_URL, body).catch((error) => { return error.response})
        return res;
}

const updateUser = (body) => {
    const res = axios.put(UPDATE_USER_URL, body, {headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
    }})
    return res
}
export default {
    getUser,
    createUser,
    updateUser
}