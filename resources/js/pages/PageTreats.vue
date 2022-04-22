<template>
    <app-page-title>Treats</app-page-title>

    <app-page-content>
        <div class="px-2 py-4">
            <div class="mb-4">
                <button
                    @click="loadCreateForm"
                    class="border font-semibold inline-flex items-center px-3 py-1 rounded-md text-xs uppercase text-gray-100 bg-teal-500">
                    Neu
                </button>
            </div>

            <div class="space-y-2">
                <treats-row :treat="treat" v-for="treat in treatsStore.treats" />
            </div>
        </div>
    </app-page-content>
</template>

<script setup>
import {markRaw} from 'vue';
import AppPageTitle from '../components/AppPageTitle';
import AppPageContent from '../components/AppPageContent';
import TreatsForm from '../components/TreatsForm';
import useDrawerStore from '@/stores/drawer';
import useTreatsStore from '@/stores/treats';
import TreatsRow from '@/components/TreatsRow';

const drawerStore = useDrawerStore();
const treatsStore = useTreatsStore();
await treatsStore.fetchAll();

const loadCreateForm = () => drawerStore.open(markRaw(TreatsForm));

</script>
