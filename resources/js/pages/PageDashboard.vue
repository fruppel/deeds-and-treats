<template>
    <app-page-content>

        <dashboard-tile>
            <dashboard-headline>Heute</dashboard-headline>
            <deeds-row :date="today"></deeds-row>
            <div class="mt-3 flex justify-between items-center">
                <div>Insgesamt verfügbar</div>
                <div class="text-xl font-semibold text-teal-500">{{ formatEuro(userStore.available) }}</div>
            </div>
        </dashboard-tile>

        <dashboard-tile class="mt-6" v-if="userStore.hasActiveTreat">
            <dashboard-headline>Derzeit aktiv</dashboard-headline>
            <div>
                <div class="flex justify-between text-base">
                    <div>{{ userStore.activeTreat.name }}</div>
                    <div>{{ formatEuro(userStore.activeTreat.costs) }}</div>
                </div>

                <progress-bar
                    :percent="userStore.activeReached"
                    class="mt-3 mb-4"
                />

                <div v-if="userStore.canUnlock">
                    <button
                        @click="unlock()"
                        class="w-full text-center bg-gray-700 rounded-md text-white mb-4 py-2 font-semibold uppercase"
                    >
                        Freischalten
                    </button>
                </div>

                <div>
                    <dashboard-row label="Verbleibend">{{ formatEuro(userStore.activeRest) }}</dashboard-row>
                    <dashboard-row label="Geschätzte Restzeit">
                        <span v-html="displayInfinityOrDays(userStore.activeEta)"/>
                    </dashboard-row>

                    <toggable-content>
                        <dashboard-row label="Gespart gesamt">{{ formatEuro(userStore.savings) }}</dashboard-row>
                        <dashboard-row label="Kosten gesamt">{{ formatEuro(userStore.costsAll) }}</dashboard-row>
                        <dashboard-row label="Ausgegeben">{{ formatEuro(userStore.costsSpent) }}</dashboard-row>
                        <dashboard-row label="Offen">{{ formatEuro(userStore.costsOpen) }}</dashboard-row>
                        <dashboard-row label="10-Tage Schnitt">{{ formatEuro(userStore.intersectionTenDays) }}</dashboard-row>
                        <dashboard-row label="ETA (offen)">
                            <span v-html="displayInfinityOrDays(userStore.openEta)"/>
                        </dashboard-row>
                    </toggable-content>
                </div>
            </div>
        </dashboard-tile>

        <dashboard-tile class="mt-6">
            <dashboard-headline>Treats</dashboard-headline>

            <div class="mt-4">
                <dashboard-treat-list :treats="treatStore.unlockableTreats.slice(0, 3)" />

                <toggable-content v-if="treatStore.unlockableTreats.length > 3">
                    <dashboard-treat-list :treats="treatStore.unlockableTreats.slice(3)" />
                </toggable-content>
            </div>
        </dashboard-tile>

        <dashboard-tile class="mt-6">
            <dashboard-headline>Historie</dashboard-headline>
            <deedlog-calendar />
        </dashboard-tile>
    </app-page-content>
</template>

<script setup>
import {ref} from 'vue';
import {getIsoDate} from '@/services/date-service';
import {formatEuro} from '@/services/formatting-service';
import DeedlogCalendar from '@/components/DeedlogCalendar';
import AppPageContent from '@/components/AppPageContent';
import DeedsRow from '@/components/DeedsRow';
import useUserStore from '@/stores/user';
import useDeedsStore from '@/stores/deeds';
import useDeedlogsStore from '@/stores/deedlogs';
import useTreatStore from '@/stores/treats';
import DashboardHeadline from '@/components/DashboardHeadline';
import ToggableContent from '@/components/ToggableContent';
import DashboardTreatList from '@/components/DashboardTreatList';
import DashboardRow from '@/components/DashboardRow';
import DashboardTile from '@/components/DashboardTile';
import ProgressBar from '@/components/ProgressBar';

const userStore = useUserStore();
const deedsStore = useDeedsStore();
const deedlogsStore = useDeedlogsStore();
const treatStore = useTreatStore();

let today = ref(null);

const fetchData = async (tabswitch) => {
    today.value = getIsoDate(new Date().toISOString());

    await userStore.fetch();
    await deedsStore.fetchAll();
    await deedlogsStore.fetchAll();
    await treatStore.fetchAll();
};

const unlock = async () => {
    await userStore.unlock();
    await treatStore.fetchAll();
}

const displayInfinityOrDays = (eta) => {
    if (isFinite(eta)) {
        return `${eta} Tage`;
    }

    return '&infin;';
}

await fetchData();

document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState === 'visible') {
        await fetchData(true);
    }
});
</script>
