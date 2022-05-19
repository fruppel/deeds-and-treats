<template>
    <input
        :value="modelValue"
        :type="type"
        @input="updateValue"
        class="py-2 px-2 rounded-md shadow-sm focus:border-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50 block sm:inline-block w-full border-gray-300 block w-full"
    >
</template>
<script setup>
const props = defineProps({
    modelValue: {
        type: [String, Number],
    },
    type: {
        type: String,
        default: 'text',
    }
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => emit('update:modelValue', event.target.value);
</script>
