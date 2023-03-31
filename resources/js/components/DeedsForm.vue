<template>
    <div class="px-4 py-4">
        <h2 class="uppercase font-semibold text-gray-900">
            {{ title }}
        </h2>

        <div class="mt-4">
            <form-label>Name</form-label>
            <form-input v-model="form.name" />
            <form-error :error="errors.name" />
        </div>

        <div class="mt-4">
            <form-label>Belohnung</form-label>
            <form-input v-model="form.value" />
            <form-error :error="errors.value" />
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
import FormLabel from './FormLabel';
import FormInput from './FormInput';
import FormError from './FormError';
import useDeedsStore from '@/stores/deeds';
import useDrawerStore from '@/stores/drawer';
import {computed, onMounted, ref} from 'vue';

const props = defineProps({
    id: {
        type: Number,
    }
});

const deedsStore = useDeedsStore();
const drawerStore = useDrawerStore();

const form = ref({
    id: props.id,
    name: null,
    value: null,
});

const errors = computed(() => deedsStore.errors);
const title = computed(() => hasDeed() ? 'Deed bearbeiten' : 'Deed erstellen');

const close = () => drawerStore.close();
const hasDeed = () => props.id !== undefined && props.id !== null;

const submit = async () => {
    hasDeed() === true
        ? await deedsStore.update(form.value)
        : await deedsStore.store(form.value);
    await deedsStore.fetchAll();
    close();
};

const loadDeedById = async () => {
    await deedsStore.fetchById(props.id);
    form.value.id = deedsStore.deed.id;
    form.value.name = deedsStore.deed.name;
    form.value.value = deedsStore.deed.value;
};

onMounted(async () => {
    if (hasDeed() === true) {
        await loadDeedById();
    }
});
</script>
