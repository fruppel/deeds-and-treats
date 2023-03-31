<template>
    <app-page-content class="px-4">
        <navigation-year v-model="currentYear"></navigation-year>
        <div class="bg-white dark:bg-gray-700 rounded">
            <div
                v-for="(statisticsPerMonth, month) in statisticsStore.statisticsByYear"
                class="grid grid-cols-3 px-2 py-2"
            >
                <div class="text-gray-900 dark:text-gray-100 text-lg">
                    {{ getGermanMonth(month - 1) }}:
                </div>
                <div class="text-right text-gray-900 dark:text-gray-100  text-lg">
                    {{ formatEuro(statisticsPerMonth.sumBoughtTreats) }}
                </div>
                <div class="text-right text-gray-900 dark:text-gray-100  text-lg">
                    {{ formatEuro(statisticsPerMonth.sumFinishedDeeds) }}
                </div>
            </div>
        </div>
    </app-page-content>
</template>

<script setup>
import AppPageContent from '../components/AppPageContent';
import useStatisticsStore from '@/stores/statistics';
import {getGermanMonth} from '@/services/date-service';
import {formatEuro} from '@/services/formatting-service';
import NavigationYear from '@/components/NavigationYear.vue';
import {ref, watch} from 'vue';

const statisticsStore = useStatisticsStore();
const currentYear = ref((new Date()).getFullYear());
await statisticsStore.receiveStatisticsByYear(currentYear.value);
console.log(statisticsStore.statisticsByYear);

watch(currentYear, async (currentYear) => {
    await statisticsStore.receiveStatisticsByYear(currentYear);
});
</script>
