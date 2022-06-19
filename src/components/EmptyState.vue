<template>
    <div class="empty-state">
        <div class="empty-state-icon">
            <b-icon
                icon="exclamation-circle-fill"
                scale="3"
                class="text-secondary-accent"
            ></b-icon>
        </div>
        <div class="empty-state-text">
            <h3>No records has been found.</h3>
        </div>
    </div>
</template>
<script>
export default {
    name: 'EmptyState',
}
</script>
<style scoped lang="scss">
.empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    height: 100%;
}
</style>
