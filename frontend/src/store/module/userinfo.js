import axios from '../../utils/ajax'
export default {
    namespaced: true,
    state: {
        auth: []
    },
    mutations: {},
    actions: {
        get_user_info ({ commit, state, dispatch }, params) {
            return axios.post('my/userinfoin/', params).then(response => response.data)
        }
    }
}