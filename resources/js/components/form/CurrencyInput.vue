<template>
    <input type="text" name="value" ref="inputRef" />
</template>

<script>
import { watch } from 'vue';
import { useCurrencyInput } from 'vue-currency-input'

export default {
    name: 'CurrencyInput',
    props: {
        modelValue: Number,
        options: Object
    },
    setup(props, { emit }) {
        const { inputRef, setOptions, setValue } = useCurrencyInput(props.options)

        watch(
            () => props.modelValue, // Vue 2: props.value
            (value) => {
                setValue(value)
            }
        );

        watch(
            () => props.options,
            (options) => {
                setOptions(options)
            }
        );

        return { inputRef }
    }
}
</script>
