<template>
    <div
        @click="loadEditForm"
        class="border rounded-md p-2 bg-white"
        :class="{'border-green-600 border-2': isUnlocked}"
    >
        <div
            class="flex text-xs justify-between text-gray-400"
        >
            <div>{{ getGermanDate(treat.bought) }}</div>
            <div v-if="isUnlocked">
                Freigeschaltet:&nbsp;<span class="font-semibold">{{ getGermanDate(treat.unlocked) }}</span>
            </div>
        </div>

        <div class="flex justify-between">
            <div>{{ treat.name }}</div>
            <div>{{ formatEuro(treat.costs) }}</div>
        </div>
    </div>
</template>

<script setup>
import {computed, markRaw} from 'vue';
import {getGermanDate} from '@/services/date-service';
import {formatEuro} from '@/services/formatting-service';
import useDrawerStore from '@/stores/drawer';
import TreatsForm from '@/components/TreatsForm';

const props = defineProps({
    treat: {
        type: Object,
        required: true,
    }
});

console.log(props.treat);

const drawerStore = useDrawerStore();

const loadEditForm = async () => {
    drawerStore.open(markRaw(TreatsForm), {id: props.treat.id});
};

const isUnlocked = computed(() => props.treat.unlocked !== null);
</script>
