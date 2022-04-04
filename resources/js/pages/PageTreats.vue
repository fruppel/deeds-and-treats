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

        <table class="table-auto border-collapse w-full">
            <tr>
                <th class="text-left">Gekauft</th>
                <th class="text-left">Name</th>
                <th class="text-right">Kosten</th>
                <th></th>
            </tr>

            <tr v-for="treat in treatsStore.treats">
                <td class="py-1 border-b text-left">{{ getGermanDate(treat.bought) }}</td>
                <td
                    class="py-1 border-b"
                    :class="{'text-teal-500 font-semibold': treat.unlocked !== null}"
                >
                    {{ treat.name }}
                </td>
                <td class="py-1 border-b text-right">{{ formatEuro(treat.costs) }}</td>
                <td  class="py-1 border-b flex justify-end">
                    <a
                        @click="loadEditForm(treat.id)"
                        class="mr-1 border rounded-md block p-1 border-teal-500 text-teal-500"
                    >
                        <pencil-icon></pencil-icon>
                    </a>
                </td>
            </tr>
        </table>
    </app-page-content>
</template>

<script setup>
import {markRaw} from 'vue';
import AppPageTitle from '../components/AppPageTitle';
import AppPageContent from '../components/AppPageContent';
import TreatsForm from '../components/TreatsForm';
import {PencilIcon} from 'vue-tabler-icons';
import useDrawerStore from '@/stores/drawer';
import useTreatsStore from '@/stores/treats';
import {formatEuro} from '@/services/formatting-service';
import {getGermanDate} from '@/services/date-service';

const drawerStore = useDrawerStore();
const treatsStore = useTreatsStore();
await treatsStore.fetchAll();

const loadEditForm = async (id) => {
    drawerStore.open(markRaw(TreatsForm), {id: id});
};

const loadCreateForm = () => drawerStore.open(markRaw(TreatsForm));

</script>
