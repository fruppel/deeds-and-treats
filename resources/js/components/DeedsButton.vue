<template>
    <div
        @click="toggleDeed(deed, date)"
        class="select-none flex-1 text-center items-center py-3 border rounded-md"
        :class="{
            'bg-gray-600 dark:bg-gray-800 text-gray-200 dark:text-gray-300 dark:border-gray-500' : hasDeedDone(deed, date),
            'bg-gray-100 dark:bg-gray-500 text-gray-900 dark:text-gray-100 dark:border-gray-600': !hasDeedDone(deed, date)
        }"
    >
        {{ deed.name }}
    </div>
</template>

<script setup>
import useDeedlogsStore from '@/stores/deedlogs';
import useUserStore from '@/stores/user';

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
const userStore = useUserStore();

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
    await userStore.fetch();
}
</script>
