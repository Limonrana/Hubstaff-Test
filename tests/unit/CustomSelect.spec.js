import CustomSelect from '@/components/CustomSelect.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('CustomSelect.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(CustomSelect, {
            localVue,
            propsData: {
                value: 'all',
                label: 'Role',
            },
        })
    });

    // Test Render the CustomSelect component
    it('renders custom select input', () => {
        // Check the component is rendered as a custom select input
        expect(wrapper.find('input').exists()).toBe(true)
    });

    // Test CustomSelect component props data value and label are set correctly
    it('renders custom select input with correct props data', () => {
        // Check the component is rendered as a custom select input
        expect(wrapper.props('value')).toBe('all')
        expect(wrapper.props('label')).toBe('Role')
    });
});