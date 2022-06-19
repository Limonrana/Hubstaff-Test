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
                                    <custom-select
                                        v-model="action"
                                        :options="actionOptions"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="no-members" v-else>
            <empty-state />
        </div>
    </div>
</template>
<script>
import CustomSelect from './CustomSelect.vue'
import EmptyState from './EmptyState.vue'
export default {
    name: 'MembersTable',
    components: { CustomSelect, EmptyState },
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
    data() {
        return {
            action: 'action',
            actionOptions: [
                {
                    text: 'Action',
                    value: 'action',
                },
            ],
        }
    },
}
</script>
<style scoped lang="scss"></style>
