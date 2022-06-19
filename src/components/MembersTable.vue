<template>
    <div class="container-table100">
        <div class="wrap-table100" v-if="getMembers.length > 0">
            <div class="table100">
                <div class="table100-head">
                    <table>
                        <thead>
                            <tr class="row100 head">
                                <th class="cell100 column1">
                                    <div class="d-flex">
                                        <b-form-checkbox
                                            name="members-all"
                                            :value="true"
                                            :unchecked-value="false"
                                        >
                                        </b-form-checkbox>
                                        <span class="ml-3">Member</span>
                                    </div>
                                </th>
                                <th class="cell100 column2">Role</th>
                                <th class="cell100 column3">Projects</th>
                                <th class="cell100 column4">Payment</th>
                                <th class="cell100 column5">Limit</th>
                                <th class="cell100 column6">Time tracking</th>
                                <th class="cell100 column7"></th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="table100-body">
                    <table>
                        <tbody>
                            <tr
                                class="row100 body"
                                v-for="member in getMembers"
                                :key="member.id"
                            >
                                <td class="cell100 column1">
                                    <div class="d-flex">
                                        <b-form-checkbox
                                            name="members-all"
                                            :value="true"
                                            :unchecked-value="false"
                                        >
                                        </b-form-checkbox>
                                        <div class="ml-3">
                                            <span
                                                class="b-avatar b-avatar-sm badge-success rounded-circle"
                                            >
                                                <span
                                                    class="b-avatar-text"
                                                ></span>
                                            </span>
                                            <span class="ml-2">{{
                                                member.name
                                            }}</span>
                                        </div>
                                    </div>
                                </td>
                                <td class="cell100 column2">
                                    <span class="mr-2">{{ member.role }}</span>
                                    <span class="edit-icon">
                                        <b-icon icon="pencil"></b-icon>
                                    </span>
                                </td>
                                <td class="cell100 column3">
                                    <span class="mr-2">{{
                                        member.projects
                                    }}</span>
                                    <span class="edit-icon">
                                        <b-icon icon="pencil"></b-icon>
                                    </span>
                                </td>
                                <td class="cell100 column4">
                                    <span class="mr-2">
                                        <span v-if="member.payment">
                                            {{ member.payment }}
                                        </span>
                                        <span class="text-accent" v-else>
                                            No pay rate / No bill rate
                                        </span>
                                    </span>
                                    <span class="edit-icon">
                                        <b-icon icon="pencil"></b-icon>
                                    </span>
                                </td>
                                <td class="cell100 column5">
                                    <span class="d-flex align-items-center">
                                        <span>
                                            <div>
                                                <span
                                                    v-if="member.limits.weekly"
                                                >
                                                    {{
                                                        `${member.limits.weekly}:00 / week`
                                                    }}
                                                </span>
                                                <span
                                                    class="text-accent"
                                                    v-else
                                                >
                                                    No weekly limit
                                                </span>
                                            </div>
                                            <div>
                                                <span
                                                    v-if="member.limits.daily"
                                                >
                                                    {{
                                                        `${member.limits.daily}:00 / day`
                                                    }}
                                                </span>
                                                <span
                                                    class="text-accent"
                                                    v-else
                                                >
                                                    No daily limit
                                                </span>
                                            </div>
                                        </span>
                                        <span class="edit-icon ml-3">
                                            <b-icon icon="pencil"></b-icon>
                                        </span>
                                    </span>
                                </td>
                                <td class="cell100 column6">
                                    <span
                                        class="badge badge-success text-capitalize px-3 py-2"
                                        :class="
                                            member.time_tracking === 'enabled'
                                                ? 'badge-success'
                                                : 'badge-danger'
                                        "
                                        >{{ member.time_tracking }}</span
                                    >
                                </td>
                                <td class="cell100 column7">
                                    <b-dropdown
                                        right
                                        variant="outline-secondary"
                                        text="Actions"
                                    >
                                        <b-dropdown-item href="#"
                                            >Edit</b-dropdown-item
                                        >
                                    </b-dropdown>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="table100-footer">
                    <div class="d-flex">
                        <div class="mr-auto">
                            <p>Showing 2 of 2 members</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="no-members" v-else>
            <empty-state />
        </div>
    </div>
</template>
<script>
import EmptyState from './EmptyState.vue'
export default {
    name: 'MembersTable',
    components: { EmptyState },
    props: {
        members: {
            type: Array,
            required: true,
        },
    },
    computed: {
        getMembers() {
            return this.members
        },
    },
}
</script>
<style scoped lang="scss">
@import '../scss/base/variables.scss';
.container-table100 {
    width: 100%;
    background: $theme-light-white;
    .wrap-table100 {
        width: 100%;
    }
    .table100 {
        background-color: $theme-light-white;
        position: relative;
        padding-top: 60px;
        border-radius: 10px;
        overflow: hidden;
        .table100-head {
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            th {
                padding-top: 18px;
                padding-bottom: 18px;
            }
        }
        table {
            width: 100%;
        }
        th,
        td {
            font-weight: unset;
            padding-right: 10px;
        }
        td {
            font-size: 15px;
            color: $theme-light-gray-dark;
            line-height: 1.4;
        }
        th {
            font-size: 18px;
            line-height: 1.4;
            color: $theme-light-gray-black;
            border-bottom: 1px solid #e6e6e6;
        }

        .column1 {
            width: 22%;
            padding-left: 15px;
        }

        .column2 {
            width: 10%;
        }

        .column3 {
            width: 10%;
        }

        .column4 {
            width: 20%;
        }

        .column5 {
            width: 13%;
        }
        .column6 {
            width: 13%;
        }
        .column7 {
            width: 8%;
            padding-right: 15px;
            text-align: right;
        }

        .table100-body {
            tr {
                .edit-icon {
                    display: none;
                }
                &:hover {
                    .edit-icon {
                        display: inline;
                        cursor: pointer;
                    }
                }
            }
            tr:nth-child(even) {
                background-clip: padding-box;
                background-color: $theme-light-white-dark;
            }
            td {
                padding-top: 18px;
                padding-bottom: 18px;
                .text-accent {
                    color: $theme-light-accent !important;
                }
                &:hover {
                    color: $theme-light-primary !important;
                    .text-accent {
                        color: $theme-light-primary !important;
                    }
                }
                &:first-child {
                    &:hover {
                        color: $theme-light-gray-dark !important;
                    }
                }
            }
        }
    }
    .no-members {
        height: 400px;
    }
}
</style>
