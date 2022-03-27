<template>
    <currency-input v-model="value" :options="{ currency: 'EUR' }"></currency-input>
</template>

<script>
import CurrencyInput from './CurrencyInput';

export default {
    components: {CurrencyInput},
    data() {
        return {
            value: 1234
        }
    }
}
</script>
