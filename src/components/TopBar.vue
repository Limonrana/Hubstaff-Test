<template>
    <div class="top-bar">
        <div class="d-flex justify-content-between">
            <div class="tab-bar">
                <nav>
                    <div class="nav member-tabs">
                        <a
                            class="nav-link active"
                            href="#"
                            @click.prevent="handleClick"
                            >Members (2)</a
                        >
                        <a
                            class="nav-link"
                            href="#"
                            @click.prevent="handleClick"
                            >Invites (4)</a
                        >
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
    methods: {
        handleClick() {
            return false
        },
    },
}
</script>
<style scoped lang="scss">
@import '../scss/base/variables.scss';
.top-bar {
    .member-tabs {
        border-bottom: 1px solid #e5e5e5;
        margin-bottom: 10px;
        .nav-link {
            padding: 0.5rem 1rem;
            border-radius: 0;
            border-bottom: 2px solid transparent;
            text-transform: uppercase;
            color: $theme-light-secondary;
            &.active {
                border-bottom: 2px solid $theme-light-primary;
                color: $theme-light-primary;
            }
        }
    }
    .search-bar {
        .form-group {
            min-width: 300px;
        }
        .has-search {
            position: relative;
            .form-control-lg {
                font-size: 1rem !important;
            }
            .form-control {
                padding-left: 2.775rem;
                border-radius: 25px;
            }
            .form-control-feedback {
                position: absolute;
                z-index: 2;
                display: block;
                width: 3.375rem;
                height: 3.375rem;
                line-height: 3.875rem;
                text-align: center;
                pointer-events: none;
                color: $theme-light-secondary;
            }
            .icon-gray {
                color: $theme-light-secondary;
            }
        }
    }
}
</style>
