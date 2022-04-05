<template>
    <div class="relative">
        <div class="mt-1 w-full bg-gray-200 rounded-full h-6 text-center">
            <div
                class="bg-teal-400 h-6 rounded-full"
                :style="{ width: formatPercent(percent) }"
            ></div>
        </div>
        <div class="w-full h-6 flex items-center justify-center absolute top-0 left-0 text-xs text-center text-black font-bold">
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
})
</script>
