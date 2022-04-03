<template>
    <app-page-title>Treats</app-page-title>

    <app-page-content>
        <div class="mb-4">
            <button
                @click="loadCreateForm"
                class="border font-semibold inline-flex items-center px-3 py-1 rounded-md text-xs uppercase text-gray-100 bg-teal-500">
                Neu
            </button>
        </div>
    </app-page-content>
</template>

<script>
import {markRaw} from 'vue';
import store from '../store';
import {DRAWER_OPEN} from '../store/types/actions';
import AppPageTitle from '../components/AppPageTitle';
import AppPageContent from '../components/AppPageContent';
import TreatsForm from '../components/TreatsForm';

export default {
    components: {
        AppPageContent,
        AppPageTitle
    },
    methods: {
        async loadEditForm(treatId) {
            await store.dispatch(DRAWER_OPEN, {component: markRaw(TreatsForm), componentProps: {id: treatId}});
        },

        loadCreateForm() {
            store.dispatch(DRAWER_OPEN, {component: markRaw(TreatsForm)})
        }
    },
}
</script>
