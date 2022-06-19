import CustomSelect from '@/components/CustomSelect.vue'
import FilterBar from '@/components/FilterBar.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('FilterBar.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(FilterBar, {
            localVue,
            slots: {
                role: '<custom-select value="all" label="Role"/>',
                timeTrack: '<custom-select value="all" label="Time Tracking"/>',
            },
            stubs: {
                // used to register custom components
                'custom-select': CustomSelect,
            },
        })
    });

    // Test Render the filterbar component
    it('renders a filter bar', () => {
        expect(wrapper.find('.filter-bar').exists()).toBe(true)
    });

    // Test Render the filterbar component slot
    it('renders the role and time tracking select input as an slot', () => {
        // Check the slot is rendered 2 time as a custom select component
        let customSelect = wrapper.findAll('input');
        expect(customSelect.length).toBe(2)
    });
});