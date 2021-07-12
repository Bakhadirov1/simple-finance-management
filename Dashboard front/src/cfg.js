module.exports = {
    LOGIN_POST_URL: "http://localhost:5000/auth/login",
    GET_USERS_URL: "http://localhost:5000/users",
    GET_USER_URL: "http://localhost:5000/api/customers/customer",
    GET_OPERATION_URL: (operationId) => `http://localhost:5000/api/operationsType/${operationId}`,
    CREATE_OPERATION_URL: "http://localhost:5000/api/operationsType/",
    CREATE_USER_URL: "http://localhost:5000/api/customers/",
    UPDATE_USER_URL: `http://localhost:5000/api/customers/`
}