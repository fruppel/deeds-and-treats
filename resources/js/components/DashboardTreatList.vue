<template>
    <div class="mb-1">
        <div
            v-for="treat in treats"
            class="flex items-center"
        >
            <button
                v-if="isActiveTreat(treat)"
                @click="removeActiveTreat()"
                class="p-2"
            >
                <star-icon class="text-yellow-600" />
            </button>

            <button
                v-else
                @click="setActiveTreat(treat)"
                class="p-2"
            >
                <star-icon class="text-gray-400" />
            </button>
            <div class="ml-2">
                {{ getGermanDate(treat.bought) }}
            </div>
            <div class="flex-1 ml-2">{{ treat.name }}</div>
            <div>{{ formatEuro(treat.costs) }}</div>
        </div>
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
}

const removeActiveTreat = () => {
    userStore.removeActiveTreat();
}

const setActiveTreat = (treat) => {
    userStore.setActiveTreat(treat);
}
</script>
