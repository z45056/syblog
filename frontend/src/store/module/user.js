import axios from '../../utils/ajax'
export default {
    namespaced: true,
    state: () => {
        auth: 'eqwr'
    },
    mutations: {},
    actions: {
        login({ commit, state, dispatch }, params) {
            return axios.post('api/login', params).then(response => response.data)
        }
    }
}