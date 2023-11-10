<template>
    <div class="px-4 py-4">
        <h2 class="uppercase font-semibold text-gray-900">
            {{ title }}
        </h2>

        <div class="mt-4">
            <form-label>Beschreibung</form-label>
            <form-input v-model="form.description" />
            <form-error :error="errors.description" />
        </div>

        <div class="mt-4">
            <form-label>Betrag</form-label>
            <form-input v-model="form.amount" />
            <form-error :error="errors.amount" />
        </div>

        <div class="mt-6 flex">
            <button
                @click="close"
                type="button"
                class="w-1/2 mr-1 border border-gray-300 rounded-md bg-gray-400 text-gray-800 text-sm uppercase font-semibold"
            >
                Abbrechen
            </button>
            <button
                @click="submit"
                type="button"
                class="w-1/2 bg-teal-500 text-white py-2 px-2 rounded-md text-sm uppercase font-semibold"
            >
                Speichern
            </button>
        </div>
    </div>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue';
import useInpaymentsStore from '@/stores/inpayments.js';
import useDrawerStore from '@/stores/drawer.js';
import FormLabel from './FormLabel.vue';
import FormInput from './FormInput.vue';
import FormError from './FormError.vue';

const props = defineProps({
    id: {
        type: Number,
    }
});

const inpaymentsStore = useInpaymentsStore();
const drawerStore = useDrawerStore();

const form = ref({
    id: props.id,
    name: null,
    value: null,
});

const errors = computed(() => inpaymentsStore.errors);
const title = computed(() => hasInpayment() ? 'Einzahlung bearbeiten' : 'Einzahlung hinzufügen');

const close = () => drawerStore.close();
const hasInpayment = () => props.id !== undefined && props.id !== null;

const submit = async () => {
    hasInpayment() === true
        ? await inpaymentsStore.update(form.value)
        : await inpaymentsStore.store(form.value);
    await inpaymentsStore.fetchAll();
    close();
};

const loadInpaymentById = async () => {
    await inpaymentsStore.fetchById(props.id);
    form.value.id = inpaymentsStore.inpayment.id;
    form.value.description = inpaymentsStore.inpayment.description;
    form.value.amount = inpaymentsStore.inpayment.amount;
};

onMounted(async () => {
    if (hasInpayment() === true) {
        await loadInpaymentById();
    }
});
</script>
