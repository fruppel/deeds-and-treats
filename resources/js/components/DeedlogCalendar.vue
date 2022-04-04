<template>
    <div class="flex">
        <button
            @click="decreaseMonth"
            class="p-2 block flex-1"
        >
            {{ getGermanMonth(previousMonth) }}
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
            {{ getGermanMonth(nextMonth) }}
        </button>
    </div>
    <div class="flex">
        <button
            @click="decreaseYear"
            class="p-2 block flex-1"
        >
            {{ currentYear - 1 }}
        </button>
        <button
            class="p-2 font-bold flex-1 mx-1"
        >
            {{ currentYear }}
        </button>
        <button
            @click="increaseYear"
            class="p-2 flex-1"
        >
            {{ currentYear + 1 }}
        </button>
    </div>
    <div class="space-y-2">
        <template
            v-for="date in historyDates"
            :key="date"
        >
            <deeds-row :date="date"></deeds-row>
        </template>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import DeedsRow from '@/components/DeedsRow';
import {getDatesForCurrentMonth, getDatesForMonthAndYear, getGermanMonth} from '@/services/date-service';

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

const increaseYear = () => currentYear.value++;
const decreaseYear = () => currentYear.value--;

const increaseMonth = () => {
    if (currentMonth.value + 1 > MONTH_DECEMBER) {
        currentMonth.value = MONTH_JANUARY;
        increaseYear();
        return;
    }

    currentMonth.value++;
};

const decreaseMonth = () => {
    if (currentMonth.value - 1 < MONTH_JANUARY) {
        currentMonth.value = MONTH_DECEMBER;
        decreaseYear();
        return;
    }

    currentMonth.value--;
};
</script>
