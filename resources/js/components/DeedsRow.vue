<template>
    <div class="flex justify-between">

        <div class="space-y-2">
            <template v-for="deed in deedsStore.deeds">
                <deeds-checkbox
                    :date="date"
                    :deed="deed"
                />
            </template>
        </div>
        <div
            v-if="date !== null && date !== '' && showDate === true"
            class="px-1 py-1 text-left text-xs dark:text-gray-400 text-center"
            style="writing-mode: tb-rl;"
        >
            {{ getGermanDate(date) }}
        </div>
    </div>
</template>

<script setup>
import {getGermanDate} from '@/services/date-service';
import useDeedsStore from '@/stores/deeds';
import DeedsCheckbox from '@/components/DeedsCheckbox.vue';

const deedsStore = useDeedsStore();

const props = defineProps({
    showDate: {
        type: Boolean,
        default: true,
    },
    date: {
        type: String,
        required: true,
    },
});
</script>
