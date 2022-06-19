<template>
    <div class="wrapper">
        <!-- Header title section start here -->
        <div class="header pb-3">
            <div class="container-fluid">
                <h2 class="h2 mb-0">Members</h2>
            </div>
        </div>
        <!-- Header title section end here -->
        <div class="container-fluid">
            <!-- Top bar section start here -->
            <top-bar>
                <b-form-input
                    v-model="search"
                    placeholder="Search members"
                    size="lg"
                    trim
                ></b-form-input>
            </top-bar>
            <!-- Top bar section end here -->
            <!-- Filter bar section start here -->
            <filter-bar>
                <template slot="role">
                    <custom-select
                        v-model="role"
                        label="ROLE"
                        :options="roleOptions"
                    ></custom-select>
                </template>
                <template slot="time-track">
                    <custom-select
                        v-model="timeTracking"
                        label="TIME TRACKING"
                        :options="timeTrackOptions"
                    ></custom-select>
                </template>
            </filter-bar>
            <!-- Filter bar section end here -->
            <!-- Member list section start here -->
            <div class="main-content">
                <div class="tab-content">
                    <div class="tab-pane fade show active">
                        <template v-if="!$store.state.isLoading">
                            <members-table :members="filterMembers" />
                        </template>
                        <template v-else>
                            <b-skeleton-table
                                :rows="7"
                                :columns="7"
                            ></b-skeleton-table>
                        </template>
                    </div>
                </div>
            </div>
            <!-- Member list section end here -->
        </div>
    </div>
</template>

<script>
import CustomSelect from '../components/CustomSelect.vue'
import FilterBar from '../components/FilterBar.vue'
import MembersTable from '../components/MembersTable.vue'
import TopBar from '../components/TopBar.vue'
export default {
    components: { TopBar, FilterBar, CustomSelect, MembersTable },
    name: 'Home',
    data() {
        return {
            roleOptions: [
                { text: 'All roles', value: 'all' },
                { text: 'Owner', value: 'owner' },
                { text: 'Viewer', value: 'viewer' },
            ],
            timeTrackOptions: [
                { text: 'All Time Tracking', value: 'all' },
                { text: 'Enabled', value: 'enabled' },
                { text: 'Disabled', value: 'disabled' },
            ],
        }
    },
    computed: {
        search: {
            get() {
                return this.$store.state.search
            },
            set(payload) {
                this.$store.commit('setSearch', payload)
            },
        },
        role: {
            get() {
                return this.$store.state.role
            },
            set(payload) {
                this.$store.commit('setRole', payload)
            },
        },
        timeTracking: {
            get() {
                return this.$store.state.timeTracking
            },
            set(payload) {
                this.$store.commit('setTimeTracking', payload)
            },
        },
        filterMembers() {
            return this.$store.getters.getFiterMembers
        },
    },
    mounted() {
        this.$store.dispatch('fetchMembers')
    },
}
</script>

<style scoped lang="scss"></style>
