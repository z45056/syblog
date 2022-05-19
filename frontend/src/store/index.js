import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import userinfo from './module/userinfo'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        userinfo
    },
    state: {
        deepcopy: function (item) {
            if (!item) {
                return item
            }
            if (item.constructor === Object) {
                const itemobject = {}
                const keys = Object.keys(item)
                if (keys.length) {
                    keys.map((it) => {
                        itemobject[it] = this.deepcopy(item[it])
                    })
                }
                return itemobject
            } else if (item.constructor === Array) {
                const itemarray = []
                if (item.length) {
                    item.map((ite) => {
                        itemarray.push(this.deepcopy(ite))
                    })
                }
                return itemarray
            } else {
                return item
            }
        },
    }
})