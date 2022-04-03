<template>
    <component :is="layout"></component>
</template>

<script>
import LayoutGuest from '@/layouts/LayoutGuest';
import {shallowRef, watch} from 'vue';
import { useRoute } from 'vue-router'

export default {
    name: 'AppContainer',
    setup() {
        const layout = shallowRef(LayoutGuest);
        const route = useRoute();

        watch(
            () => route.meta,
            async meta => {
                const layoutClass = meta?.layout !== undefined
                    ? meta.layout
                    : 'LayoutGuest';

                const component = await import(`../layouts/${layoutClass}`);
                layout.value = component.default;
            },
            { immediate: true }
        )

        return {layout};
    },
}
</script>
