<template>
    <div
        @click="toggleDeed(deed, date)"
        class="flex-1 text-center items-center py-3 border bg-gray-50 rounded-md m-1"
        :class="{'bg-gray-700 text-gray-200' : hasDeedDone(deed, date)}"
    >
        {{ deed.name }}
    </div>
</template>

<script>
import store from '../store';
import {
    DEEDLOG_DESTROY,
    DEEDLOG_FETCH_ALL,
    DEEDLOG_STORE,
    SAVINGS_FETCH
} from '../store/types/actions';
import {mapGetters} from 'vuex';

export default {
    props: {
        deed: {
            type: Object,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapGetters(['deedlogs']),
    },
    methods: {
        async toggleDeed(deed, day) {
            if (this.hasDeedDone(deed, day)) {
                await store.dispatch(
                    DEEDLOG_DESTROY,
                    this.deedlogs[day][deed.id]['id']
                );
            } else {
                await store.dispatch(DEEDLOG_STORE, {
                    deed_id: deed.id,
                    day: day
                });
            }

            await store.dispatch(DEEDLOG_FETCH_ALL);
            await store.dispatch(SAVINGS_FETCH);
        },
        hasDeedDone(deed, day) {
            return this.deedlogs[day]?.[deed.id] !== undefined;
        },
    }
}
</script>
