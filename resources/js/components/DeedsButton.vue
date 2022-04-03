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
import useDeedlogsStore from '@/stores/deedlogs';
import useSavingsStore from '@/stores/savings';

export default {
    setup() {
        const deedlogsStore = useDeedlogsStore();
        deedlogsStore.fetchAll();

        const savingsStore = useSavingsStore();

        return {
            deedlogsStore,
            savingsStore
        };
    },
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
    methods: {
        async toggleDeed(deed, day) {
            if (this.hasDeedDone(deed, day)) {
                await this.deedlogsStore.destroy(
                    this.deedlogsStore.deedlogs[day][deed.id]['id']
                );
            } else {
                await this.deedlogsStore.store({
                    deed_id: deed.id,
                    day: day
                });
            }

            await this.deedlogsStore.fetchAll();
            await this.savingsStore.fetch();
        },
        hasDeedDone(deed, day) {
            return this.deedlogsStore.deedlogs[day]?.[deed.id] !== undefined;
        },
    }
}
</script>
