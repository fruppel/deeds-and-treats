<template>
    <div>
        <div
            v-if="date"
            class="px-1 py-1 text-xs text-center"
        >
            {{ getGermanDate(date) }}
        </div>
        <div class="flex justify-between space-x-1.5">
            <template v-for="deed in deedsStore.deeds.slice(0, 3)">
                <deeds-button
                    :deed="deed"
                    :date="date"
                />
            </template>
        </div>
    </div>
</template>

<script setup>
import DeedsButton from '@/components/DeedsButton.vue';
import {getGermanDate} from '@/services/date-service';
import useDeedsStore from '@/stores/deeds';

const deedsStore = useDeedsStore();

const props = defineProps({
    date: {
        type: String,
        default: '',
    },
});
</script>
