import userService from "../services/customer.services";

const mutations = {
    setUser(state, user) {
        state.user = user
    }
}

const actions = {
    async fetchUser({commit}) {
        try {
            const user = await userService.getUser()
            commit('setUser', user.data)
        } catch (error) {
            console.log(error)
        }
    },
    async createUser({commit}, body) {
        const response = await userService.createUser(body);
        if (response.status == 400) {
            return response.data
        }
        return response;
    },
    async updateUser({commit}, body, id) {
        const updatedUser = await userService.updateUser(body, id);
        return updatedUser;
    }
}

const getters = {
    user: (state) => state.user
}

const state = () => ({
    user: {}
})

export default {
    mutations,
    getters,
    actions,
    state
}