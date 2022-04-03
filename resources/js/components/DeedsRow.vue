<template>
    <div class="flex">
        <div
            class="flex-1 text-center items-center py-3 my-1"
        >
            {{ getGermanDate(date) }}
        </div>
        <template v-for="deed in deedsStore.deeds.slice(0, 3)">
            <deeds-button
                :deed="deed"
                :date="date"
            />
        </template>
    </div>
</template>

<script setup>
import DeedsButton from '@/components/DeedsButton.vue';
import {getGermanDate} from '@/services/date-service';
import useDeedsStore from '@/stores/deeds';
import {defineProps} from 'vue';

const deedsStore = useDeedsStore();

const props = defineProps({
    date: {
        type: String,
        required: true,
    },
});
</script>
