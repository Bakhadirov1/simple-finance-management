import userService from "../services/customer.services";
import operationServices from "../services/operation.services";
import operationService from "../services/operation.services";

const mutations = {
    setOperations(state, operations) {
        state.operations = operations;
    },
    setOperation(state, operation){
        state.operation = operation;
    }
}

const actions = {
    async fetchOperations({commit}) {
        try {
            const user = await userService.getUser();
            const operations = user.data.Operations;
            commit('setOperations', operations);
        } catch (error) {
            console.log(error);
        }
    },
    async fetchOperation({commit}, id) {
        try {
            const operation = (await operationService.getOperation(id)).data;
            commit('setOperation', operation);
        } catch (error) {
            
        }
    },
    async createOperation({ commit }, body) {
        try {
            const operation = await operationService.createOperation(body);
        } catch (error) {
            
        }
    }
}

const getters = {
    operation: (state) => state.operation,
    operations: (state) => state.operations
}

const state = () => ({
    operation: {},
    operations: []
})

export default {
    mutations,
    getters,
    actions,
    state
}