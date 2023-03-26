<template>
    <select
        @change="updateValue"
        class="py-2 px-2 rounded-md shadow-sm focus:border-teal-400 focus:ring focus:ring-teal-300 focus:ring-opacity-50 block sm:inline-block w-full border-gray-300 block w-full dark:bg-gray-800 dark:text-gray-100"
    >
        <option disabled value="">{{ emptyLabel }}</option>
        <option
            v-for="(option, key) in options"
            :value="key"
            :selected="isSelected(key)"
        >
            {{ option }}
        </option>
    </select>
</template>
<script setup>
const props = defineProps({
    emptyLabel: {
        type: String,
        default: 'Bitte wählen',
    },
    modelValue: {
        type: [String, Number],
    },
    options: {
        type: Object,
        default: () => {},
    },
});

const emit = defineEmits(['update:modelValue']);

const isSelected = key => {
    return props.modelValue === key ? 'selected' : false;
}

const updateValue = (event) => {
    emit('update:modelValue', event.target.value);
};
</script>
