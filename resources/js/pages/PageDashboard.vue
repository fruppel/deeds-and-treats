<template>
    <app-page-content class="pb-32">
        <dashboard-tile>
            <dashboard-headline>Heute</dashboard-headline>
            <deeds-row :date="today" :show-date="false"></deeds-row>
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

                    <div class="mt-4">
                        <toggable-content>
                            <dashboard-row label="Kosten gesamt">{{ formatEuro(userStore.costsAll) }}</dashboard-row>
                            <dashboard-row label="Gespart gesamt">{{ formatEuro(userStore.savings) }}</dashboard-row>
                            <dashboard-row label="Einzahlungen">{{ formatEuro(userStore.inpaymentsSum) }}</dashboard-row>
                            <dashboard-row label="Ausgegeben">{{ formatEuro(userStore.costsSpent) }}</dashboard-row>
                            <dashboard-row label="Offen">{{ formatEuro(userStore.costsOpen) }}</dashboard-row>

                            <table class="w-full mt-4 mb-4">
                                <tbody>
                                <tr>
                                    <th></th>
                                    <th class="text-right">&Oslash;</th>
                                    <th class="text-right">ETA (Aktuell)</th>
                                    <th class="text-right">ETA (Rest)</th>
                                </tr>
                                <tr>
                                    <td>Maximal</td>
                                    <td class="text-right">
                                        {{ formatEuro(userStore.maxSavingsPerDay) }}
                                    </td>
                                    <td
                                        class="text-right"
                                        v-html="displayInfinityOrDays(userStore.activeEtaMax)"
                                        @click="showDateToast(userStore.activeEtaMax)"
                                    ></td>
                                    <td
                                        class="text-right"
                                        v-html="displayInfinityOrDays(userStore.openEtaMax)"
                                        @click="showDateToast(userStore.openEtaMax)"
                                    ></td>
                                </tr>
                                <tr>
                                    <td>3-Tage</td>
                                    <td class="text-right">{{ formatEuro(userStore.intersectionThreeDays) }}</td>
                                    <td
                                        class="text-right"
                                        v-html="displayInfinityOrDays(userStore.activeEtaThreeDays)"
                                        @click="showDateToast(userStore.activeEtaThreeDays)"
                                    ></td>
                                    <td
                                        class="text-right"
                                        v-html="displayInfinityOrDays(userStore.openEtaThreeDays)"
                                        @click="showDateToast(userStore.openEtaThreeDays)"
                                    ></td>
                                </tr>
                                <tr>
                                    <td>10-Tage</td>
                                    <td class="text-right">{{ formatEuro(userStore.intersectionTenDays) }}</td>
                                    <td
                                        class="text-right"
                                        v-html="displayInfinityOrDays(userStore.activeEtaTenDays)"
                                        @click="showDateToast(userStore.activeEtaTenDays)"
                                    ></td>
                                    <td
                                        class="text-right"
                                        v-html="displayInfinityOrDays(userStore.openEtaTenDays)"
                                        @click="showDateToast(userStore.openEtaTenDays)"
                                    ></td>
                                </tr>
                                </tbody>
                            </table>
                        </toggable-content>
                    </div>
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
import {onMounted, ref} from 'vue';
import {getGermanDate, getIsoDate} from '@/services/date-service';
import {formatEuro} from '@/services/formatting-service';
import useUserStore from '@/stores/user.js';
import useDeedsStore from '@/stores/deeds.js';
import useDeedlogsStore from '@/stores/deedlogs.js';
import useTreatStore from '@/stores/treats.js';
import useInpaymentsStore from '@/stores/inpayments.js';
import useToastStore from '@/stores/toast.js';
import DeedlogCalendar from '@/components/DeedlogCalendar.vue';
import AppPageContent from '@/components/AppPageContent.vue';
import DeedsRow from '@/components/DeedsRow.vue';
import DashboardHeadline from '@/components/DashboardHeadline.vue';
import ToggableContent from '@/components/ToggableContent.vue';
import DashboardTreatList from '@/components/DashboardTreatList.vue';
import DashboardRow from '@/components/DashboardRow.vue';
import DashboardTile from '@/components/DashboardTile.vue';
import ProgressBar from '@/components/ProgressBar.vue';

const userStore = useUserStore();
const deedsStore = useDeedsStore();
const deedlogsStore = useDeedlogsStore();
const treatStore = useTreatStore();
const inpaymentsStore = useInpaymentsStore();
const toastStore = useToastStore();

let today = ref(getIsoDate(new Date().toISOString()));

const fetchData = async (tabswitch) => {
    today.value = getIsoDate(new Date().toISOString());

    await userStore.fetch();
    await deedsStore.fetchAll();
    await deedlogsStore.fetchAll();
    await treatStore.fetchAll();
    await inpaymentsStore.fetchAll();
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

const showDateToast = (days) => {
    let date = new Date();
    date.setDate(date.getDate() + days);
    toastStore.show(getGermanDate(date.toDateString()));
};

onMounted(async () => {
    await fetchData();
});

document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState === 'visible') {
        await fetchData(true);
    }
});
</script>
