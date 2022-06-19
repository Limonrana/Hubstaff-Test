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

            <!-- TODO: Filter bar section start here -->

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
import TopBar from '../components/TopBar.vue'
export default {
    components: { TopBar },
    name: 'Home',
    data() {
        return {
            isLoading: true,
            search: '',
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
