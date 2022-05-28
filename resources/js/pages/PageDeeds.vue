<template>
    <app-page-title>Deeds</app-page-title>

    <app-page-content>
        <table class="table-auto border-collapse w-full">
            <tr>
                <th class="text-left">Name</th>
                <th class="text-right">Belohnung</th>
                <th class="hidden sm:table-cell text-left">Erstellt</th>
                <th></th>
            </tr>

            <tr v-for="deed in deedsStore.deeds">
                <td class="py-1 border-b">{{ deed.name }}</td>
                <td class="py-1 border-b text-right">{{ deed.value }}</td>
                <td>{{ deed.created }}</td>
                <td class="py-1 border-b flex justify-end">
                    <a
                        @click="loadEditForm(deed.id)"
                        class="mr-1 border rounded-md block p-1 border-teal-500 text-teal-500"
                    >
                        <pencil-icon></pencil-icon>
                    </a>
                </td>
            </tr>
        </table>

        <floating-action-button @click="loadCreateForm" />
    </app-page-content>
</template>

<script setup>
import AppPageTitle from '../components/AppPageTitle';
import AppPageContent from '../components/AppPageContent';
import DeedsForm from '../components/DeedsForm';
import { PencilIcon } from 'vue-tabler-icons';
import {markRaw} from 'vue';
import useDrawerStore from '@/stores/drawer';
import useDeedsStore from '@/stores/deeds';
import FloatingActionButton from '@/components/FloatingActionButton';

const drawerStore = useDrawerStore();

const deedsStore = useDeedsStore();
await deedsStore.fetchAll();

const loadEditForm = async (deedId) => {
    drawerStore.open(markRaw(DeedsForm), {id: deedId});
};

const loadCreateForm = () => drawerStore.open(markRaw(DeedsForm));
</script>
