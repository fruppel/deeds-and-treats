<template>
    <component :is="layout"></component>
</template>

<script>
import {computed} from 'vue';
import { useRoute } from 'vue-router'

export default {
    name: 'AppContainer',
    setup() {
        const route = useRoute();

        const layout = computed(() => {
            return route.meta.layout || 'LayoutGuest';
        });

        return {layout};
    },
}
</script>
