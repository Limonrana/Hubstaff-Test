<template>
    <div class="filter-bar">
        <div class="row">
            <div class="col-10">
                <div class="d-flex gap-5">
                    <div class="form-group w-25">
                        <slot name="role"></slot>
                    </div>
                    <div class="form-group w-25">
                        <slot name="time-track"></slot>
                    </div>
                </div>
            </div>
            <div class="col-2 d-flex align-items-center justify-content-end">
                <b-button class="button-primary px-3" size="md">
                    Invite member
                </b-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FilterBar',
}
</script>
<style scoped></style>
