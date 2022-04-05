<template>
    <app-page-title>Dashboard</app-page-title>

    <app-page-content>

        <dashboard-tile>
            <dashboard-headline>Heute</dashboard-headline>
            <deeds-row :date="today"></deeds-row>
            <div class="mt-3 flex justify-between items-center">
                <div>Insgesamt verfügbar</div>
                <div class="text-xl font-semibold text-teal-500">{{ formatEuro(userStore.available) }}</div>
            </div>
        </dashboard-tile>

        <dashboard-tile class="mt-6">
            <dashboard-headline>Derzeit aktiv</dashboard-headline>
            <div v-if="userStore.hasActiveTreat">
                <div class="flex justify-between text-lg">
                    <div>{{ userStore.activeTreat.name }}</div>
                    <div>{{ formatEuro(userStore.activeTreat.costs) }}</div>
                </div>

                <progress-bar
                    :percent="userStore.activeReached"
                    class="mt-3 mb-4"
                />

                <div>
                    <dashboard-row label="Verbleibend">{{ formatEuro(userStore.activeRest) }}</dashboard-row>
                    <dashboard-row label="Geschätzte Restzeit">{{ userStore.activeEta }} Tage</dashboard-row>

                    <toggable-content>
                        <dashboard-row label="Gespart gesamt">{{ formatEuro(userStore.savings) }}</dashboard-row>
                        <dashboard-row label="Kosten gesamt">{{ formatEuro(userStore.costsAll) }}</dashboard-row>
                        <dashboard-row label="Ausgegeben">{{ formatEuro(userStore.costsSpent) }}</dashboard-row>
                        <dashboard-row label="Offen">{{ formatEuro(userStore.costsOpen) }}</dashboard-row>
                        <dashboard-row label="10-Tage Schnitt">{{ formatEuro(userStore.intersectionTenDays) }}</dashboard-row>
                        <dashboard-row label="ETA (offen)">{{ userStore.openEta }} Tage</dashboard-row>
                    </toggable-content>
                </div>

                <div v-if="userStore.canUnlock">
                    <button @click="unlock()">
                        Freischalten
                    </button>
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
import {getIsoDate} from '@/services/date-service';
import {formatEuro, formatPercent} from '@/services/formatting-service';
import DeedlogCalendar from '@/components/DeedlogCalendar';
import AppPageTitle from '@/components/AppPageTitle';
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
await userStore.fetch();

const deedsStore = useDeedsStore();
await deedsStore.fetchAll();

const deedlogsStore = useDeedlogsStore();
await deedlogsStore.fetchAll();

const treatStore = useTreatStore();
await treatStore.fetchAll();

const today = getIsoDate(new Date().toISOString());

const unlock = async () => {
    await userStore.unlock();
    await treatStore.fetchAll();
}
</script>
