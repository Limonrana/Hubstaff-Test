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
                        <!-- TODO: Member list section start here -->
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
import TopBar from '../components/TopBar.vue'
export default {
    components: { TopBar, FilterBar, CustomSelect },
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
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false
        }, 1000)
    },
}
</script>

<style scoped lang="scss"></style>
