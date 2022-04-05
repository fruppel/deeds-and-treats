<template>
    <div>
        <div
            v-if="contentVisible"
        >
            <slot />
        </div>
        <a
            @click="toggleVisibility"
            class="mt-1 flex w-full items-center py-1 text-gray-500"
        >
            <span class="block mr-1">{{ label }}</span>
            <component :is="iconComponent" class="w-5 h-5 text-gray-400"/>
        </a>
    </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import {ChevronDownIcon, ChevronUpIcon} from 'vue-tabler-icons';

const props = defineProps({
    labelMore: {
        type: String,
        default: 'Mehr anzeigen'
    },
    labelLess: {
        type: String,
        default: 'Weniger anzeigen'
    }
});

const contentVisible = ref(false);
const iconComponent = computed(() => contentVisible.value === true ? ChevronUpIcon : ChevronDownIcon);
const label = computed(() => contentVisible.value === true ? props.labelLess : props.labelMore);

const toggleVisibility = () => contentVisible.value = !contentVisible.value;
</script>
