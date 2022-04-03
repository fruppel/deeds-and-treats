<template>
    <div
        @click="toggleDeed(deed, date)"
        class="flex-1 text-center items-center py-3 border bg-gray-50 rounded-md m-1"
        :class="{'bg-gray-700 text-gray-200' : hasDeedDone(deed, date)}"
    >
        {{ deed.name }}
    </div>
</template>

<script setup>
import useDeedlogsStore from '@/stores/deedlogs';
import useSavingsStore from '@/stores/savings';

const props = defineProps({
    deed: {
        type: Object,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
})

const deedlogsStore = useDeedlogsStore();
const savingsStore = useSavingsStore();

const hasDeedDone = (deed, day) => {
    return deedlogsStore.deedlogs[day]?.[deed.id] !== undefined;
}

const toggleDeed = async (deed, day) => {
    if (hasDeedDone(deed, day)) {
        await deedlogsStore.destroy(
            deedlogsStore.deedlogs[day][deed.id]['id']
        );
    } else {
        await deedlogsStore.store({
            deed_id: deed.id,
            day: day
        });
    }

    await deedlogsStore.fetchAll();
    await savingsStore.fetch();
}
</script>
