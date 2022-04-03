<template>
    <app-page-title>Dashboard</app-page-title>

    <app-page-content>
        <div>
            <deeds-row :date="today"></deeds-row>
        </div>

        <div>
            Gesamt: {{ formatEuro(savingsStore.sum) }}
        </div>

        <div class="mt-2">
            <a @click="toggleHistory()">Historie</a>

            <div v-if="historyVisible">
                <deedlog-calendar />
            </div>
        </div>
    </app-page-content>
</template>

<script setup>
import {ref} from 'vue';
import {getIsoDate} from '@/services/date-service';
import {formatEuro} from '@/services/formatting-service';
import DeedlogCalendar from '@/components/DeedlogCalendar';
import AppPageTitle from '@/components/AppPageTitle';
import AppPageContent from '@/components/AppPageContent';
import DeedsRow from '@/components/DeedsRow';
import useSavingsStore from '@/stores/savings';
import useDeedsStore from '@/stores/deeds';
import useDeedlogsStore from '@/stores/deedlogs';

const savingsStore = useSavingsStore();
await savingsStore.fetch();

const deedsStore = useDeedsStore();
await deedsStore.fetchAll();

const deedlogsStore = useDeedlogsStore();
await deedlogsStore.fetchAll();

const today = getIsoDate(new Date().toISOString());

const historyVisible = ref(false);

const toggleHistory = () => historyVisible.value = !historyVisible.value;
</script>
