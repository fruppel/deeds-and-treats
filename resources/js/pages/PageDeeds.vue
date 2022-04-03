<template>
    <app-page-title>Deeds</app-page-title>

    <app-page-content>
        <div class="mb-4">
            <button
                @click="loadCreateForm"
                class="border font-semibold inline-flex items-center px-3 py-1 rounded-md text-xs uppercase text-gray-100 bg-teal-500">
                Neu
            </button>
        </div>

        <table class="table-auto border-collapse w-full">
            <tr>
                <th class="text-left">Name</th>
                <th class="text-right">Belohnung</th>
                <th class="hidden sm:table-cell text-left">Erstellt</th>
                <th></th>
            </tr>

            <tr v-for="deed in deeds">
                <td class="py-1 border-b">{{ deed.name }}</td>
                <td class="py-1 border-b text-right">{{ deed.value }}</td>
                <td>{{ deed.created }}</td>
                <td class="py-1 border-b flex justify-end">
                    <a
                        @click="loadEditForm(deed.id)"
                        class="mr-1 border rounded-md block p-1 border-teal-500 text-teal-500"
                    >
                        <pencil-icon></pencil-icon>
                    </a>
                </td>
            </tr>
        </table>
    </app-page-content>
</template>

<script>
import { mapGetters } from 'vuex';
import store from '../store';
import AppPageTitle from '../components/AppPageTitle';
import AppPageContent from '../components/AppPageContent';
import DeedsForm from '../components/DeedsForm';
import {DEED_FETCH_ALL, DRAWER_OPEN} from '../store/types/actions';
import { PencilIcon } from 'vue-tabler-icons';
import {markRaw} from 'vue';
import FormInput from '../components/FormInput';

export default {
    components: {
        FormInput,
        AppPageContent,
        AppPageTitle,
        PencilIcon
    },

    computed: {
        ...mapGetters(['deeds'])
    },

    methods: {
        async loadEditForm(deedId) {
            await store.dispatch(DRAWER_OPEN, {component: markRaw(DeedsForm), componentProps: {id: deedId}});
        },

        loadCreateForm() {
            store.dispatch(DRAWER_OPEN, {component: markRaw(DeedsForm)})
        }
    },

    async beforeRouteEnter(to, from, next) {
        await store.dispatch(DEED_FETCH_ALL);
        next();
    },
}
</script>
