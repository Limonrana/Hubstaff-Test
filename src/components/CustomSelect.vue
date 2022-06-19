<template>
    <div class="custom-selector-wrapper">
        <fieldset class="form-group" @click.prevent="isShow = !isShow">
            <div>
                <label class="form-control-label">{{ label }}</label>
                <div class="has-label">
                    <div class="custom-select-input">
                        <div class="select-input">
                            <input
                                type="text"
                                placeholder="Select an option"
                                class="input__inner"
                                :value="selectedText"
                                readonly="readonly"
                            />
                            <span class="input__suffix">
                                <b-icon
                                    icon="chevron-up"
                                    scale="0.7"
                                    class="select__caret input__icon"
                                    :class="{ 'is-reverse': isShow }"
                                ></b-icon>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </fieldset>
        <div class="select-dropdown" v-show="isShow">
            <ul class="select-dropdown__list">
                <li
                    class="select-dropdown__item"
                    :class="selected === option.value ? 'selected' : ''"
                    v-for="(option, index) in mapOptions"
                    :key="index"
                    @click="onChange(option.value)"
                >
                    <span>{{ option.text }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CustomSelect',
    props: {
        value: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: false,
        },
        options: {
            type: Array,
            default: () => [],
        },
    },
    computed: {
        selectedText() {
            return this.options.find((option) => option.value === this.selected)
                ?.text
        },
        mapOptions() {
            return this.options.map((option) => {
                // Check if text or value is provided in the option
                const text = option.text || option.value
                return {
                    text,
                    value: option.value || text,
                }
            })
        },
        selectListLeft() {
            return (window.innerWidth - 565) / 2
        },
        selectListTop() {
            return (window.innerHeight * 58) / 100
        },
    },
    data() {
        return {
            isShow: false,
            selected: this.value,
        }
    },
    mounted() {
        document.body.addEventListener('click', this.handleOutsideClick)
    },
    beforeDestroy() {
        document.body.removeEventListener('click', this.handleOutsideClick)
    },
    methods: {
        onChange(value) {
            this.selected = value
            this.isShow = false
            this.$emit('input', value)
        },
        handleOutsideClick(e) {
            if (!this.$el.contains(e.target)) {
                this.isShow = false
            }
        },
    },
}
</script>
<style scoped lang="scss">
.custom-selector-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    .form-group {
        .form-control-label {
            color: #535d6d;
            font-size: 12px;
            font-weight: 500;
        }
        .custom-select-input {
            width: 100%;
            display: inline-block;
            position: relative;
            .select-input {
                display: block;
                position: relative;
                font-size: 14px;
                width: 100%;
                .input__inner {
                    font-size: 0.875rem;
                    width: 100%;
                    -webkit-transition: all 0.15s ease-in-out;
                    transition: all 0.15s ease-in-out;
                    cursor: pointer;
                    padding-right: 35px;
                    -webkit-appearance: none;
                    background-color: #fff;
                    background-image: none;
                    border-radius: 5px;
                    border: 1px solid #dcdfe6;
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    color: #606266;
                    display: inline-block;
                    height: 40px;
                    line-height: 40px;
                    outline: 0;
                    padding: 0 15px;
                    -webkit-transition: border-color 0.2s
                        cubic-bezier(0.645, 0.045, 0.355, 1);
                    transition: border-color 0.2s
                        cubic-bezier(0.645, 0.045, 0.355, 1);
                    width: 100%;
                }
                .input__suffix {
                    position: absolute;
                    top: 0;
                    right: 5px;
                    height: 100%;
                    pointer-events: none;
                    transition: all 0.3s;
                    -webkit-transition: all 0.3s;
                    color: #c0c4cc;
                    text-align: center;
                    .select__caret {
                        color: #c0c4cc;
                        font-size: 14px;
                        -webkit-transition: -webkit-transform 0.3s;
                        transition: -webkit-transform 0.3s;
                        transition: transform 0.3s;
                        transition: transform 0.3s, -webkit-transform 0.3s;
                        -webkit-transform: rotate(180deg);
                        transform: rotate(180deg);
                        cursor: pointer;
                    }
                    .is-reverse {
                        -webkit-transform: rotate(0);
                        transform: rotate(0);
                    }
                    .input__icon {
                        height: 100%;
                        width: 25px;
                        text-align: center;
                        line-height: 40px;
                    }
                }
            }
        }
    }
    .select-dropdown {
        position: absolute;
        z-index: 9999;
        width: 100%;
        top: 85%;
        border: 1px solid #e4e7ed;
        border-radius: 4px;
        background-color: #fff;
        -webkit-box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 5px 0;
        .select-dropdown__list {
            list-style: none;
            padding: 6px 0;
            margin: 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            .select-dropdown__item {
                font-size: 14px;
                padding: 0 20px;
                position: relative;
                overflow: hidden;
                text-overflow: ellipsis;
                color: #606266;
                height: 34px;
                line-height: 34px;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                cursor: pointer;
                &.selected {
                    color: #409eff;
                }
                &:hover {
                    background-color: #f5f7fa;
                }
            }
        }
    }
}
</style>
