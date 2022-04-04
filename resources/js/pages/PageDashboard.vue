<template>
    <app-page-title>Dashboard</app-page-title>

    <app-page-content>
        <div>
            <dashboard-headline>Heute</dashboard-headline>
            <deeds-row></deeds-row>
            <div class="mt-3 flex justify-between items-center">
                <div>Insgesamt verfügbar</div>
                <div class="text-xl font-semibold text-teal-500">{{ formatEuro(userStore.available) }}</div>
            </div>
        </div>

        <div class="mt-6">
            <dashboard-headline>Derzeit aktiv</dashboard-headline>
            <div v-if="userStore.hasActiveTreat">
                <div class="flex justify-between">
                    <div>{{ userStore.activeTreat.name }}</div>
                    <div>{{ formatEuro(userStore.activeTreat.costs) }}</div>
                </div>
                <div>
                    <div class="mt-1 w-full bg-gray-200 rounded-full h-5 text-center">
                        <div
                            class="bg-teal-500 h-5 rounded-full"
                            :style="{ width: formatPercent(userStore.activeReached) }"
                        ></div>
                    </div>
                    <div class="text-xs w-full text-center">
                        {{ formatPercent(userStore.activeReached) }}
                    </div>
                </div>
                <div v-if="userStore.canUnlock">
                    <button @click="unlock()">
                        Freischalten
                    </button>
                </div>
            </div>
        </div>

        <div class="mt-6">
            <dashboard-headline>Mehr</dashboard-headline>

            <div class="mt-4">
                <toggable-content label="Alle Treats &raquo;">
                    <dashboard-treat-list :treats="treatStore.unlockableTreats" />
                </toggable-content>
            </div>

            <div class="mt-4">
                <toggable-content label="Statistik &raquo;">
                    <div class="px-2 py-1">
                        <div class="mt-2 py-1 flex justify-between border-b border-gray-200">
                            <div>Gespart gesamt</div>
                            <div class="font-semibold">{{ formatEuro(userStore.savings) }}</div>
                        </div>
                        <div class="mt-2 py-1 flex justify-between border-b border-gray-200">
                            <div>Kosten gesamt</div>
                            <div class="font-semibold">{{ formatEuro(userStore.costsAll) }}</div>
                        </div>
                        <div class="mt-2 py-1 flex justify-between border-b border-gray-200">
                            <div>Ausgegeben</div>
                            <div class="font-semibold">{{ formatEuro(userStore.costsSpent) }}</div>
                        </div>
                        <div class="mt-2 py-1 flex justify-between">
                            <div>Offen</div>
                            <div class="font-semibold">{{ formatEuro(userStore.costsOpen) }}</div>
                        </div>
                    </div>
                </toggable-content>
            </div>

            <div class="mt-4">
                <toggable-content label="Historie &raquo;">
                    <deedlog-calendar />
                </toggable-content>
            </div>
        </div>
    </app-page-content>
</template>

<script setup>
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

const userStore = useUserStore();
await userStore.fetch();

const deedsStore = useDeedsStore();
await deedsStore.fetchAll();

const deedlogsStore = useDeedlogsStore();
await deedlogsStore.fetchAll();

const treatStore = useTreatStore();
await treatStore.fetchAll();

const unlock = async () => {
    await userStore.unlock();
    await treatStore.fetchAll();
}
</script>
