<template>
    <div
        v-for="treat in treats"
        class="flex items-end mb-4"
    >
        <button
            @click="toggleTreat(treat)"
            class="pt-2 pr-1 select-none outline-0"
        >
            <star-icon :class="toggleButtonClass(treat)" />
        </button>
        <div class="ml-2 flex-1">
            <div class="text-xs text-gray-500">{{ getGermanDate(treat.bought) }}</div>
            <div class="">{{ treat.name }}</div>
        </div>

        <div>{{ formatEuro(treat.costs) }}</div>
    </div>
</template>

<script setup>
import {formatEuro} from '@/services/formatting-service';
import {getGermanDate} from '@/services/date-service';
import useUserStore from '@/stores/user';
import {StarIcon} from 'vue-tabler-icons';

const userStore = useUserStore();

const props = defineProps({
    treats: {
        type: Object,
        required: true,
    }
});

const isActiveTreat = (treat) => {
    return userStore.hasActiveTreat && treat.id === userStore.activeTreat.id
};

const toggleButtonClass = (treat) => {
    return isActiveTreat(treat)
        ? 'text-yellow-600'
        : 'text-gray-400';
};

const toggleTreat = (treat) => {
    isActiveTreat(treat) ? userStore.removeActiveTreat() : userStore.setActiveTreat(treat);
};
</script>
