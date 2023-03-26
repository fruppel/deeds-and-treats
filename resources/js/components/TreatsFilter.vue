<template>
    <div>
        <div>
            <form-label class="dark:text-gray-300">Sortieren</form-label>
            <form-select
                :options="sortOptions"
                @change="updateSort"
                v-model="form.sort"
            />
        </div>
        <div class="mt-4">
            <form-label class="dark:text-gray-300">Filter</form-label>
            <form-select
                :options="filterOptions"
                @change="updateFilter"
                v-model="form.filter"
            />
        </div>
    </div>
</template>

<script setup>
import FormLabel from '@/components/FormLabel';
import FormSelect from '@/components/FormSelect';
import useTreatsStore from '@/stores/treats';
import {ref} from 'vue';

const treatsStore = useTreatsStore();

const sortOptions = {
    'name_asc': 'Name (aufsteigend)',
    'name_desc': 'Name (absteigend)',
    'bought_asc': 'Gekauft (aufsteigend)',
    'bought_desc': 'Gekauft (absteigend)',
    'costs_asc': 'Preis (aufsteigend)',
    'costs_desc': 'Preis (absteigend)',
    'unlocked_asc': 'Freigeschaltet (aufsteigend)',
    'unlocked_desc': 'Freigeschaltet (absteigend',
};

const filterOptions = {
    'all': 'Alle',
    'unlocked': 'Freigeschaltet',
    'not_unlocked': 'Nicht freigeschaltet',
};

const form = ref({
    sort: 'bought_asc',
    filter: 'all',
});

const updateSort = () => {
    let [by, direction] = form.value.sort.split('_');
    treatsStore.applySort(by, direction);
};

const updateFilter = () => treatsStore.applyFilter(form.value.filter);

</script>
