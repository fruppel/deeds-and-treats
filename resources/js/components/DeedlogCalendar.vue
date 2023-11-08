<template>
    <div class="flex">
        <button
            @click="decreaseMonth"
            class="p-2 block flex-1"
        >
            &laquo; {{ getGermanMonth(previousMonth) }}
        </button>
        <button
            class="p-2 font-bold flex-1 mx-1"
        >
            {{ getGermanMonth(currentMonth) }}
        </button>
        <button
            @click="increaseMonth"
            class="p-2 flex-1"
        >
            {{ getGermanMonth(nextMonth) }} &raquo;
        </button>
    </div>
    <navigation-year v-model="currentYear"></navigation-year>
    <div class="space-y-6 mt-4">
        <template
            v-for="date in historyDates.slice(0, 3)"
            :key="date"
        >
            <deeds-row :date="date"></deeds-row>
        </template>

        <toggable-content>
            <template
                v-for="date in historyDates.slice(3)"
                :key="date"
            >
                <deeds-row :date="date"></deeds-row>
            </template>
        </toggable-content>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import DeedsRow from '@/components/DeedsRow.vue';
import {getDatesForCurrentMonth, getDatesForMonthAndYear, getGermanMonth} from '@/services/date-service';
import ToggableContent from '@/components/ToggableContent.vue';
import NavigationYear from '@/components/NavigationYear.vue';

const MONTH_DECEMBER = 11;
const MONTH_JANUARY = 0;
const TODAY = new Date();

const currentMonth = ref(TODAY.getMonth());
const currentYear = ref(TODAY.getFullYear());

const previousMonth = computed(() => {
    return currentMonth.value - 1 < MONTH_JANUARY
        ? MONTH_DECEMBER
        : currentMonth.value - 1;
});

const nextMonth = computed(() => {
    return currentMonth.value + 1 > MONTH_DECEMBER
        ? MONTH_JANUARY
        : currentMonth.value + 1;
});

const historyDates = computed(() => {
    return (currentMonth.value === TODAY.getMonth()
        && currentYear.value === TODAY.getFullYear())
        ? getDatesForCurrentMonth()
        : getDatesForMonthAndYear(currentMonth.value, currentYear.value)
});

const increaseMonth = () => {
    if (currentMonth.value + 1 > MONTH_DECEMBER) {
        currentMonth.value = MONTH_JANUARY;
        currentYear.value++;
        return;
    }

    currentMonth.value++;
};

const decreaseMonth = () => {
    if (currentMonth.value - 1 < MONTH_JANUARY) {
        currentMonth.value = MONTH_DECEMBER;
        currentYear.value--;
        return;
    }

    currentMonth.value--;
};
</script>
