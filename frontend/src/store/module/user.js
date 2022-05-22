import axios from '../../utils/ajax'
export default {
    namespaced: true,
    state:{
        userInfo: {}
    },
    mutations: {
        setUserInfo (state, value) {
            state.userInfo = value
        }
    },
    actions: {
        login({ commit, state, dispatch }, params) {
            return axios.post('api/login', params).then(response => response.data)
        },
        register({ commit, state, dispatch }, params) {
            return axios.post('api/register', params).then(response => response.data)
        },
        get_user_info({ commit, state, dispatch }, params) {
            return axios.get('api/get_user_info', params).then(response => response.data)
        }
    }
}