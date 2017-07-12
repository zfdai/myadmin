import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import welcome from './modules/welcome'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{

	},
	actions,
	getters,
	modules: {
		welcome
	}
})

