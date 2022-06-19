import Home from '@/views/Home.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('Home.vue', () => {
    let wrapper;
    let actions;
    let state;
    let store;
    beforeEach(() => {
        actions = {
            fetchMembers: jest.fn(),
        }
        state = {
            count: 0,
            search: '',
            members: [
                {
                    id: 1,
                    name: "Jared Brown",
                    role: "Owner",
                    projects: 8,
                    payment: null,
                    limits: {
                    weekly: null,
                      daily: 8
                    },
                    time_tracking: "enabled"
                }
            ],
            role: 'all',
            isLoading: true,
            timeTracking: 'all',
            apiUrl: 'https://run.mocky.io/v3',
        },
        store = new Vuex.Store({
            state, actions
        })

        wrapper = shallowMount(Home, {
            store, localVue
        })
    });

    // Test Render the Home view component
    it('renders home view page', () => {
        // Check the view component is rendered or not
        expect(wrapper.find('.wrapper').exists()).toBe(true)
    });
});