<template>
    <div class="relative">
        <div class="mt-1 w-full bg-gray-200 dark:bg-gray-900 rounded-full h-6 text-center">
            <div
                class="bg-teal-400 dark:bg-teal-700 h-6 rounded-full"
                :style="{ width: progressbarWidth(percent) }"
            ></div>
        </div>
        <div class="w-full h-6 flex items-center justify-center absolute top-0 left-0 text-xs text-center text-black dark:text-gray-200 font-bold">
            {{ formatPercent(percent) }}
        </div>
    </div>
</template>

<script setup>
import {formatPercent} from '@/services/formatting-service';

const props = defineProps({
    percent: {
        type: Number,
        required: true,
    }
});

const progressbarWidth = (percent) => {
    console.log(percent);
    let minPercent = 0.5;

    if (percent > 0.5) {
        minPercent = percent;
    }

    return formatPercent(minPercent);
};
</script>
