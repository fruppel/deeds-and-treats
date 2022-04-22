<template>
    <app-page-title>Treats</app-page-title>

    <app-page-content>
        <div class="px-2">
            <div class="space-y-2">
                <treats-row :treat="treat" v-for="treat in treatsStore.treats" />
            </div>
        </div>

        <floating-action-button @click="loadCreateForm"></floating-action-button>
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
import FloatingActionButton from '@/components/FloatingActionButton';

const drawerStore = useDrawerStore();
const treatsStore = useTreatsStore();
await treatsStore.fetchAll();

const loadCreateForm = () => drawerStore.open(markRaw(TreatsForm));
</script>
