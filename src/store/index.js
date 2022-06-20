import Axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0,
        search: '',
        members: [],
        role: 'all',
        isLoading: true,
        timeTracking: 'all',
        apiUrl: 'https://run.mocky.io/v3',
    },
    getters: {
        getFiterMembers: state => {
            // Filter members by search name
            const getSearchMembers = state.members.filter(member => {
                return member.name.toLowerCase().includes(state.search.toLowerCase())
            })

            // Filter members by role
            const members = getSearchMembers.filter((member) => {
                if (state.role === 'all') {
                    return true
                }
                return (
                    member.role.toLowerCase() === state.role.toLowerCase()
                )
            })

            // Filter members by time tracking
            if (state.timeTracking === 'all') {
                return members
            }
            return members.filter((member) => {
                return (
                    member.time_tracking.toLowerCase() ===
                    state.timeTracking.toLowerCase()
                )
            })
        },
    },
    mutations: {
        setMembers(state, payload) {
            state.members = payload
        },
        setCount(state, payload) {
            state.count = payload
        },
        setIsLoading(state, payload) {
            state.isLoading = payload
        },
        setSearch(state, payload) {
            state.search = payload
        },
        setRole(state, payload) {
            state.role = payload
        },
        setTimeTracking(state, payload) {
            state.timeTracking = payload
        }
    },
    actions: {
        async fetchMembers(context) {
            // fetch members from API
            try {
                let api = context.state.apiUrl
                let { data, status } = await Axios.get(api + '/34234632-e36c-450d-a0a5-63249d1fa3ad')
                if (status === 200) {
                    // update members in store
                    context.commit('setCount', data.count)
                    context.commit('setMembers', data.members)
                } else {
                    // handle status code
                    console.log('There was an issue with the API call')
                }
            } catch (error) {
                console.log(error)
            }
            // set isLoading to false
            context.commit('setIsLoading', false)
        },
    },
    modules: {},
})
