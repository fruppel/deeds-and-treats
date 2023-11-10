<template>
    <div
        @click="loadEditForm"
        class="pt-2 pr-2 last:pb-2"
    >
        <div class="flex">
            <div class="flex-1">
                <div class="text-xs text-gray-400 dark:text-gray-400">
                    <div class="px-2">{{ getGermanDate(inpayment.created_at) }}</div>
                </div>
                <div class="flex justify-between dark:text-gray-100">
                    <div class="text-left flex-1 px-2">{{ inpayment.description }}</div>
                    <div>{{ formatEuro(inpayment.amount) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {markRaw} from 'vue';
import useDrawerStore from '@/stores/drawer';
import {formatEuro} from '@/services/formatting-service';
import {getGermanDate} from "@/services/date-service.js";
import InpaymentsForm from '@/components/InpaymentsForm.vue';

const props = defineProps({
    inpayment: {
        type: Object,
        required: true,
    }
});

const drawerStore = useDrawerStore();

const loadEditForm = async () => {
    drawerStore.open(markRaw(InpaymentsForm), {id: props.inpayment.id});
};
</script>
