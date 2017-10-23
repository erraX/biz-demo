<template>
    <div>
        <select v-model="selector">
            <option value="0">不限</option>
            <option value="1">自定义</option>
        </select>
        <input
            v-show="selector === '1'"
            type="text"
            v-model="input"
        />
    </div>
</template>

<script>
    export default {

        props: {
            value: {},
        },

        data() {
            return {
                selector: '0',
                input: 'haha',
            };
        },
        watch: {
            selector() {
                const value = this.selector === '0' ? '0' : this.input;
                this.$emit('input', value);
            },

            input() {
                const value = this.selector === '0' ? '0' : this.input;
                this.$emit('input', value);
            }
        }
    };
</script>
