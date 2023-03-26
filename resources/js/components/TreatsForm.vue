<template>
    <div class="px-4 py-4">
        <div>
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
                <form-input type="date" v-model="form.bought" />
                <form-error :error="errors.bought" />
            </div>

            <div class="mt-4">
                <form-label>Freigeschaltet</form-label>
                <form-input type="date" v-model="form.unlocked" />
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

        <div v-if="showDivide" class="mt-8 pt-6 border-t border-gray-400">
            <treat-divide-form
                :id="form.id"
                @divided="close"
            />
        </div>

        <div v-if="unlocked === false" class="mt-8 pt-6 border-t border-gray-600">
            <h2 class="uppercase font-semibold text-gray-900 mb-2">
                Treat löschen
            </h2>
            <button
                @click="deleteTreat"
                class="w-full bg-red-900 text-white py-2 px-2 rounded-md text-sm uppercase font-semibold"
            >
                Löschen
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
import useTreatStore from '@/stores/treat';
import useDrawerStore from '@/stores/drawer';
import TreatDivideForm from '@/components/TreatDivideForm';

const treatsStore = useTreatsStore();
const treatStore = useTreatStore();
const drawerStore = useDrawerStore();

const props = defineProps({
    id: {
        type: Number,
        default: null,
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

const close = async () => {
    drawerStore.close();
    await treatsStore.fetchAll();
}
const exists = () => props.id !== undefined && props.id !== null;
const unlocked = computed(() => {
    return exists() && treatStore.treat && treatStore.treat.unlocked !== null
});

const submit = async () => {
    exists() === true
        ? await treatStore.update(form.value)
        : await treatStore.store(form.value);
    await close();
};

const deleteTreat = async () => {
    await treatStore.destroy(props.id);
    await close();
};

const loadTreatById = async () => {
    await treatStore.fetchById(props.id);
    form.value.id = treatStore.treat.id;
    form.value.name = treatStore.treat.name;
    form.value.costs = treatStore.treat.costs;
    form.value.bought = treatStore.treat.bought;
    form.value.unlocked = treatStore.treat.unlocked;
};

const showDivide = ref(false);

onMounted(async () => {
    if (exists()) {
        await loadTreatById();
        showDivide.value = unlocked.value === false;
    }
})
</script>
