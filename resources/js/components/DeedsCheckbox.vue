<template>
    <div class="flex items-center">
        <input
            :id="checkboxId"
            type="checkbox"
            class="w-6 h-6 opacity-0 absolute"
            :checked="hasDeedDone()"
            @change="toggleDeed(deed, date)"
        >
        <div class="bg-gray-700 border-2 rounded-md border-gray-600 w-6 h-6 flex items-center justify-center">
            <svg class="fill-current hidden w-4 h-4 text-teal-600 pointer-events-none" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                    <g transform="translate(-9 -11)" fill="currentColor" fill-rule="nonzero">
                        <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                    </g>
                </g>
            </svg>
        </div>
        <label :for="checkboxId" class="ml-2 font-medium text-gray-900 dark:text-gray-300">
            {{ deed.name }}
        </label>
    </div>
</template>

<script setup>
import useDeedlogsStore from '@/stores/deedlogs';
import useUserStore from '@/stores/user';
import {computed} from 'vue';

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

const hasDeedDone = () => {
    return deedlogsStore.deedlogs[props.date]?.[props.deed.id] !== undefined;
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

const checkboxId = `checkbox_${props.date}_${props.deed.id}`;
</script>
