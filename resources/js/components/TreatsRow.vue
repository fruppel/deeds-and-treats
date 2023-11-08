<template>
    <div
        @click="loadEditForm"
        class="pt-2 pr-2 last:pb-2"
    >
        <div class="flex">
            <span class="ml-1 w-1.5 mr-2" :class="{'bg-teal-600': isUnlocked}"></span>
            <div class="flex-1">
                <div class="text-xs text-gray-400 dark:text-gray-400">
                    <div>Gekauft: {{ getGermanDate(treat.bought) }}</div>
                    <div v-if="isUnlocked">
                        Freigeschaltet:&nbsp;<span class="font-semibold">{{ getGermanDate(treat.unlocked) }}</span>
                    </div>
                </div>

                <div class="flex justify-between dark:text-gray-100">
                    <div>{{ treat.name }}</div>
                    <div>{{ formatEuro(treat.costs) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, markRaw} from 'vue';
import useDrawerStore from '@/stores/drawer';
import {getGermanDate} from '@/services/date-service';
import {formatEuro} from '@/services/formatting-service';
import TreatsForm from '@/components/TreatsForm.vue';

const props = defineProps({
    treat: {
        type: Object,
        required: true,
    }
});

const drawerStore = useDrawerStore();

const loadEditForm = async () => {
    drawerStore.open(markRaw(TreatsForm), {id: props.treat.id});
};

const isUnlocked = computed(() => props.treat.unlocked !== null);
</script>
