<template>
    <app-page-content class="px-4">
        <navigation-year v-model="currentYear"></navigation-year>
        <div class="bg-white dark:bg-gray-700 rounded mt-4">
            <div class="grid grid-cols-3 px-2 py-2 border-b mx-1 font-bold">
                <div class="text-gray-900 dark:text-gray-100 text-sm">Monat</div>
                <div class="text-gray-900 dark:text-gray-100 text-sm text-right">Ausgegeben</div>
                <div class="text-gray-900 dark:text-gray-100 text-sm text-right">Gespart</div>
            </div>
            <div
                v-for="(statisticsPerMonth, month) in statisticsStore.statisticsByYear"
                class="grid grid-cols-3 px-2 py-2"
            >
                <div
                    class="text-gray-900 dark:text-gray-100 text-sm"
                    :class="textColor(statisticsPerMonth.sumBoughtTreats, statisticsPerMonth.sumFinishedDeeds)"
                >
                    {{ getGermanMonth(month - 1) }}:
                </div>
                <div class="text-right text-gray-900 dark:text-gray-100 text-sm">
                    {{ formatEuro(statisticsPerMonth.sumBoughtTreats) }}
                </div>
                <div class="text-right text-gray-900 dark:text-gray-100 text-sm">
                    {{ formatEuro(statisticsPerMonth.sumFinishedDeeds) }}
                </div>
            </div>
        </div>
    </app-page-content>
</template>

<script setup>
import AppPageContent from '../components/AppPageContent.vue';
import useStatisticsStore from '@/stores/statistics';
import {getGermanMonth} from '@/services/date-service';
import {formatEuro} from '@/services/formatting-service';
import NavigationYear from '@/components/NavigationYear.vue';
import {computed, onMounted, ref, watch} from 'vue';

const statisticsStore = useStatisticsStore();
const currentYear = ref((new Date()).getFullYear());

const textColor = (sumBought, sumFinished) => {
    return sumBought <= sumFinished
        ? 'text-green-400 dark:text-green-400'
        : 'text-red-400 dark:text-red-400';
};

onMounted(async () => {
    await statisticsStore.receiveStatisticsByYear(currentYear.value);
});

watch(currentYear, async (currentYear) => {
    await statisticsStore.receiveStatisticsByYear(currentYear);
});
</script>
