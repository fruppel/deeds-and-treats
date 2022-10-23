<template>
    <div>
        <form-label class="dark:text-gray-300">Sortieren</form-label>
        <form-select
            :options="sortOptions"
            @change="updateStore"
            v-model="form.sort"
        />
    </div>
</template>

<script setup>
import FormLabel from '@/components/FormLabel';
import FormSelect from '@/components/FormSelect';
import useTreatsStore from '@/stores/treats';
import {ref} from 'vue';

const treatsStore = useTreatsStore();

const sortOptions = {
    'bought_asc': 'Gekauft (aufsteigend)',
    'bought_desc': 'Gekauft (absteigend)',
    'costs_asc': 'Preis (aufsteigend)',
    'costs_desc': 'Preis (absteigend)',
    'unlocked_asc': 'Freigeschaltet (aufsteigend)',
    'unlocked_desc': 'Freigeschaltet (absteigend',
};

const form = ref({
    sort: 'bought_asc',
});

const updateStore = () => {
    let [by, direction] = form.value.sort.split('_');
    treatsStore.applySort(by, direction);
};
</script>
