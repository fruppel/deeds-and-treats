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
            <form-label>Kosten</form-label>
            <form-input v-model="form.costs" />
            <form-error :error="errors.costs" />
        </div>

        <div class="mt-4">
            <form-label>Gekauft</form-label>
            <form-input v-model="form.bought" />
            <form-error :error="errors.bought" />
        </div>

        <div class="mt-4">
            <form-label>Freigeschaltet</form-label>
            <form-input v-model="form.unlocked" />
            <form-error :error="errors.unlocked" />
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
import FormLabel from './FormLabel';
import FormInput from './FormInput';
import FormError from './FormError';
import useTreatsStore from '@/stores/treats';
import useDrawerStore from '@/stores/drawer';

const treatsStore = useTreatsStore();
const drawerStore = useDrawerStore();

const props = defineProps({
    id: {
        type: Number,
    }
});

const form = ref({
    id: props.id,
    name: null,
    costs: null,
    bought: null,
    unlocked: null,
});

const errors = computed(() => treatsStore.errors);
const title = computed(() => exists()
    ? 'Treat bearbeiten'
    : 'Treat erstellen'
);

const close = () => drawerStore.close();
const exists = () => props.id !== undefined && props.id !== null;

const submit = async () => {
    exists() === true
        ? await treatsStore.update(form.value)
        : await treatsStore.store(form.value);
    await treatsStore.fetchAll();
    close();
};

const loadTreatById = async () => {
    await treatsStore.fetchById(props.id);
    form.value.id = treatsStore.treat.id;
    form.value.name = treatsStore.treat.name;
    form.value.costs = treatsStore.treat.costs;
    form.value.bought = treatsStore.treat.bought;
    form.value.unlocked = treatsStore.treat.unlocked;
};

onMounted(async () => {
    if (exists()) {
        await loadTreatById();
    }
})
</script>
