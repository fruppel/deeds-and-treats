<template>
    <div>
        <div
            v-if="date"
            class="px-1 py-1 text-left text-xs dark:text-gray-400"
        >
            {{ getGermanDate(date) }}
        </div>
        <div class="grid gap-2" :class="classes">
            <template v-for="deed in deedsStore.deeds">
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
import {computed} from 'vue';

const DEFAULT_COLS_COUNT = 3;

const deedsStore = useDeedsStore();

const props = defineProps({
    date: {
        type: String,
        default: '',
    },
});

const classes = computed(() => {
    const deedCount = deedsStore.deeds.length;
    let numCols = DEFAULT_COLS_COUNT;

    if (deedCount === 1) {
        numCols = 1;
    } else if (deedCount === 2 || deedCount === 4) {
        numCols = 2;
    }

    return 'grid-cols-' + numCols;
});
</script>
