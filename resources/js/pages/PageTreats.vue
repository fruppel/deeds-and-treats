<template>
    <app-page-content class="px-4 pb-32">
        <treats-filter class="mb-8" />

        <div class="space-y-2 divide-y bg-white dark:bg-gray-700 border dark:border-gray-900 dark:divide-gray-900 shadow rounded-md">
            <treats-row :treat="treat" v-for="treat in treatsFilteredStore.treats" />
        </div>

        <floating-action-button @click="loadCreateForm"></floating-action-button>
    </app-page-content>
</template>

<script setup>
import {markRaw, onMounted} from 'vue';
import useDrawerStore from '@/stores/drawer';
import useTreatsFilteredStore from '@/stores/treatsFiltered';
import AppPageContent from '../components/AppPageContent.vue';
import TreatsForm from '../components/TreatsForm.vue';
import TreatsRow from '@/components/TreatsRow.vue';
import FloatingActionButton from '@/components/FloatingActionButton.vue';
import TreatsFilter from '@/components/TreatsFilter.vue';

const drawerStore = useDrawerStore();
const treatsFilteredStore = useTreatsFilteredStore();
const loadCreateForm = () => drawerStore.open(markRaw(TreatsForm));

onMounted(async () => {
    await treatsFilteredStore.fetch();
});
</script>
