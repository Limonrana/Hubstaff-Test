import MembersTable from '@/components/MembersTable.vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.use(BootstrapVueIcons)

describe('MembersTable.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(MembersTable, {
            localVue,
            propsData: {
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
            },
        })
    });

    // Test Render the MembersTable component
    it('renders members table', () => {
        // Check the component is rendered as a members table
        expect(wrapper.find('.container-table100').exists()).toBe(true)
    });

    // Test MembersTable component props data value and label are set correctly
    it('renders custom select input with correct props data', () => {
        // Check the component props data is set correctly
        expect(wrapper.props('members')).toEqual([
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
        ]);
    });

    // Test Render the MembersTable component
    it('renders members table', () => {
        // Check the component is rendered on members table with correct data
        expect(wrapper.find('[data-name="Jared Brown"]').text()).toBe("Jared Brown")
    });
});