<template>
    <app-page-content class="px-4">
        <div class="space-y-2 divide-y bg-white dark:bg-gray-700 border dark:border-gray-900 dark:divide-gray-900 shadow rounded-md">
            <inpayments-row :inpayment="inpayment" v-for="inpayment in inpaymentsStore.inpayments"></inpayments-row>
        </div>
        <floating-action-button @click="loadCreateForm" />
    </app-page-content>
</template>

<script setup>
import {markRaw, onMounted} from 'vue';
import useDrawerStore from '@/stores/drawer.js';
import useInpaymentsStore from '@/stores/inpayments.js';
import AppPageContent from '@/components/AppPageContent.vue';
import InpaymentsForm from '@/components/InpaymentsForm.vue';
import FloatingActionButton from '@/components/FloatingActionButton.vue';
import InpaymentsRow from "@/components/InpaymentsRow.vue";

const drawerStore = useDrawerStore();
const inpaymentsStore = useInpaymentsStore();

const loadCreateForm = () => drawerStore.open(markRaw(InpaymentsForm));

onMounted(async () => {
    await inpaymentsStore.fetchAll();
});
</script>
