<template>
    <div class="top-bar">
        <div class="d-flex justify-content-between">
            <div class="tab-bar">
                <nav>
                    <div class="nav member-tabs">
                        <a class="nav-link active" href="#">Members (2)</a>
                        <a class="nav-link" href="#">Invites (4)</a>
                    </div>
                </nav>
            </div>
            <div class="search-bar">
                <div class="form-group has-search">
                    <span class="form-control-feedback">
                        <b-icon icon="search" class="h5 icon-gray"></b-icon>
                    </span>
                    <slot></slot>
                </div>
            </div>
        </div>
        <p class="text-secondary-accent">
            1 of 2 members counts towards your pricing plan
            <span
                ><b-icon
                    icon="exclamation-circle-fill"
                    scale="1"
                    class="text-secondary-accent"
                    id="icon-exclamation-interactive"
                ></b-icon>
                <b-tooltip target="icon-exclamation-interactive"
                    >Viewers don't count towards your Team of 10 (Premium) plan
                </b-tooltip>
            </span>
        </p>
    </div>
</template>
<script>
export default {
    name: 'TopBar',
}
</script>
<style scoped></style>
