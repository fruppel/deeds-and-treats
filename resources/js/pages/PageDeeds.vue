<template>
    <app-page-content class="px-4">
        <div class="space-y-2 divide-y bg-white dark:bg-gray-700 border dark:border-gray-900 dark:divide-gray-900 shadow rounded-md">
            <template v-for="deed in deedsStore.deeds">
                <div
                    @click="loadEditForm(deed.id)"
                    class="py-2 px-2 flex justify-between dark:text-gray-200"
                >
                    <div>
                        <div class="dark:text-gray-400 text-xs">{{ getGermanDate(deed.created_at) }}</div>
                        <div>{{ deed.name }}</div>
                    </div>
                    <div>{{ formatEuro(deed.value) }}</div>
                </div>

            </template>
        </div>

        <floating-action-button @click="loadCreateForm" />
    </app-page-content>
</template>

<script setup>
import {markRaw, onMounted} from 'vue';
import useDrawerStore from '@/stores/drawer';
import useDeedsStore from '@/stores/deeds';
import {getGermanDate} from '@/services/date-service';
import {formatEuro} from '@/services/formatting-service';
import AppPageContent from '../components/AppPageContent.vue';
import DeedsForm from '../components/DeedsForm.vue';
import FloatingActionButton from '@/components/FloatingActionButton.vue';

const drawerStore = useDrawerStore();
const deedsStore = useDeedsStore();

const loadEditForm = async (deedId) => {
    drawerStore.open(markRaw(DeedsForm), {id: deedId});
};

const loadCreateForm = () => drawerStore.open(markRaw(DeedsForm));

onMounted(async () => {
    await deedsStore.fetchAll();
});
</script>
