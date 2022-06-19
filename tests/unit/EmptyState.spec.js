import EmptyState from '@/components/EmptyState.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('EmptyState.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(EmptyState, {
            localVue
        })
    });

    // Test Render the EmptyState component
    it('renders empty state component', () => {
        // Check the component is rendered as a empty state component
        expect(wrapper.find('.empty-state').exists()).toBe(true)
    });
});