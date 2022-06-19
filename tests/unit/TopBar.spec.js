import TopBar from '@/components/TopBar.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { BFormInput, BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('TopBar.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(TopBar, {
            localVue,
            slots: {
                default: [BFormInput],
              }
        })
    });

    // Test Render the topbar component
    it('renders a top bar', () => {
        expect(wrapper.find('.top-bar').exists()).toBe(true)
    });

    // Test Render the topbar component slot
    it('renders the search input as an slot', () => {
        expect(wrapper.find('input').exists()).toBe(true)
        // Set the value of the input
        wrapper.find('input').setValue('test')
        // Check the value of the input
        expect(wrapper.find('input').element.value).toBe('test')
    });
});