<template>
    <input
        :value="modelValue"
        :type="type"
        @input="updateValue"
        class="py-2 px-1 rounded-md shadow-sm focus:border-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50 block sm:inline-block w-full sm:w-80 border-gray-300 block mt-1 w-full"
    >
</template>

<script>
export default {
    props: {
        modelValue: '',
        type: {
            type: String,
            default: 'text',
        }
    },

    methods: {
        updateValue(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>
