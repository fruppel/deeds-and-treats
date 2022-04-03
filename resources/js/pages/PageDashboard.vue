<template>
    <app-page-title>Dashboard</app-page-title>

    <app-page-content>
        <div>
            <deeds-row :date="todayIso"></deeds-row>
        </div>

        <div>
            Gesamt: {{ formatEuro(savings) }}
        </div>

        <div class="mt-2">
            <a @click="toggleHistory()">Historie</a>

            <div v-if="historyVisible">
                <div class="flex">
                    <button
                        @click="decreaseMonth"
                        class="p-2 block flex-1"
                    >
                        {{ germanMonth(previousMonth) }}
                    </button>
                    <button
                        class="p-2 font-bold flex-1 mx-1"
                    >
                        {{ germanMonth(currentMonth) }}
                    </button>
                    <button
                        @click="increaseMonth"
                        class="p-2 flex-1"
                    >
                        {{ germanMonth(nextMonth) }}
                    </button>
                </div>
                <div class="flex">
                    <button
                        @click="decreaseYear"
                        class="p-2 block flex-1"
                    >
                        {{ currentYear - 1 }}
                    </button>
                    <button
                        class="p-2 font-bold flex-1 mx-1"
                    >
                        {{ currentYear }}
                    </button>
                    <button
                        @click="increaseYear"
                        class="p-2 flex-1"
                    >
                        {{ currentYear + 1 }}
                    </button>
                </div>
                <template
                    v-for="date in historyDates"
                    :key="date"
                >
                    <deeds-row :date="date"></deeds-row>
                </template>
            </div>
        </div>
    </app-page-content>
</template>

<script>
import AppPageTitle from '../components/AppPageTitle';
import AppPageContent from '../components/AppPageContent';
import DeedsButton from '../components/DeedsButton';
import DeedsRow from '../components/DeedsRow';

import {
    getDatesForCurrentMonth,
    getDatesForMonthAndYear,
    getGermanMonth,
    getGermanDate,
    getIsoDate
} from '../services/date-service';
import {formatEuro} from '../services/formatting-service';
import store from '../store';
import {DEED_FETCH_ALL, DEEDLOG_FETCH_ALL, SAVINGS_FETCH} from '../store/types/actions';
import {mapGetters} from 'vuex';

const MONTH_DECEMBER = 11;
const MONTH_JANUARY = 0;
const TODAY = new Date();

export default {
    components: {
        DeedsRow,
        DeedsButton,
        AppPageContent,
        AppPageTitle
    },

    data() {
        return {
            historyVisible: false,
            currentMonth: TODAY.getMonth(),
            currentYear: TODAY.getFullYear(),
        };
    },

    computed: {
        ...mapGetters(['deeds', 'savings']),
        todayIso() {
            return getIsoDate(TODAY.toISOString());
        },
        today() {
            return getGermanDate(TODAY.toISOString());
        },
        nextMonth() {
            return this.currentMonth + 1 > MONTH_DECEMBER
                ? MONTH_JANUARY
                : this.currentMonth + 1;
        },
        previousMonth() {
            return this.currentMonth - 1 < MONTH_JANUARY
                ? MONTH_DECEMBER
                : this.currentMonth - 1;
        },
        historyDates() {
            return (this.currentMonth === TODAY.getMonth()
                    && this.currentYear === TODAY.getFullYear())
                ? getDatesForCurrentMonth()
                : getDatesForMonthAndYear(this.currentMonth, this.currentYear)
        }
    },

    methods: {
        toggleHistory() {
            this.historyVisible = !this.historyVisible;
        },

        decreaseMonth() {
            if (this.currentMonth - 1 < MONTH_JANUARY) {
                this.currentMonth = MONTH_DECEMBER;
                this.decreaseYear();
                return;
            }

            this.currentMonth--;
        },

        increaseMonth() {
            if (this.currentMonth + 1 > MONTH_DECEMBER) {
                this.currentMonth = MONTH_JANUARY;
                this.increaseYear();
                return;
            }

            this.currentMonth++;
        },
        decreaseYear() {
            this.currentYear--;
        },
        increaseYear() {
            this.currentYear++;
        },
        germanMonth(month) {
            return getGermanMonth(month);
        },
        germanDate(date) {
            return getGermanDate(date);
        },
        formatEuro(value) {
            return formatEuro(value);
        }
    },

    async beforeRouteEnter(to, from, next) {
        await store.dispatch(DEED_FETCH_ALL);
        await store.dispatch(DEEDLOG_FETCH_ALL);
        await store.dispatch(SAVINGS_FETCH);

        next();
    },

    async mounted() {
        console.log(this.historyDates);
        console.log(TODAY);
    }
}
</script>
