import axios from 'axios'
import { GET_OPERATION_URL, CREATE_OPERATION_URL } from "../cfg";

const getOperation = async (id) => {
    const result = await axios.get(GET_OPERATION_URL(id), { headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
    }});
    return result;
}

const createOperation = async (body) => {
    const result = await axios.post(CREATE_OPERATION_URL, { Type: body.Type,
        Sum: body.Sum,
        Description: body.Description}, { headers: {
        Authorization: "Bearer " + localStorage.getItem('token')
    }}, );
    return result;
}



export default {
    getOperation,
    createOperation
}