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
                        v-model="filterRole"
                        label="ROLE"
                        :options="filterRoleOptions"
                    ></custom-select>
                </template>
                <template slot="time-track">
                    <custom-select
                        v-model="filterTimeTrack"
                        label="TIME TRACKING"
                        :options="filterTimeTrackOptions"
                    ></custom-select>
                </template>
            </filter-bar>
            <!-- Filter bar section end here -->
            <!-- Member list section start here -->
            <div class="main-content">
                <div class="tab-content">
                    <div class="tab-pane fade show active">
                        <members-table
                            :members="filterMembers"
                            v-if="!isLoading"
                        />
                        <b-skeleton-table
                            :rows="7"
                            :columns="7"
                            v-else
                        ></b-skeleton-table>
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
            isLoading: true,
            search: '',
            filterRole: 'all',
            filterRoleOptions: [
                { text: 'All roles', value: 'all' },
                { text: 'Owner', value: 'owner' },
                { text: 'Viewer', value: 'viewer' },
            ],
            filterTimeTrack: 'all',
            filterTimeTrackOptions: [
                { text: 'All Time Tracking', value: 'all' },
                { text: 'Enabled', value: 'enabled' },
                { text: 'Disabled', value: 'disabled' },
            ],
            members: [
                {
                    id: 1,
                    name: 'Jared Brown',
                    role: 'Owner',
                    projects: 8,
                    payment: null,
                    limits: {
                        weekly: null,
                        daily: 8,
                    },
                    time_tracking: 'enabled',
                },
                {
                    id: 2,
                    name: 'Adrian Goia',
                    role: 'Viewer',
                    projects: 5,
                    payment: null,
                    limits: {
                        weekly: 50,
                        daily: 8,
                    },
                    time_tracking: 'enabled',
                },
                {
                    id: 3,
                    name: 'Cody Rogers',
                    role: 'Viewer',
                    projects: 8,
                    payment: null,
                    limits: {
                        weekly: 40,
                        daily: null,
                    },
                    time_tracking: 'enabled',
                },
            ],
        }
    },
    computed: {
        searchFilterMembers() {
            return this.members.filter((member) => {
                return member.name
                    .toLowerCase()
                    .includes(this.search.toLowerCase())
            })
        },
        filterMembers() {
            const members = this.searchFilterMembers.filter((member) => {
                if (this.filterRole === 'all') {
                    return true
                }
                return (
                    member.role.toLowerCase() === this.filterRole.toLowerCase()
                )
            })
            if (this.filterTimeTrack === 'all') {
                return members
            }
            return members.filter((member) => {
                return (
                    member.time_tracking.toLowerCase() ===
                    this.filterTimeTrack.toLowerCase()
                )
            })
        },
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false
        }, 1000)
    },
}
</script>

<style scoped lang="scss"></style>
