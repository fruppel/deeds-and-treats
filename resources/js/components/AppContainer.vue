<template>
    <component :is="layout"></component>
</template>

<script>
// import LayoutApp from '@/layouts/LayoutApp';
// import LayoutGuest from '@/layouts/LayoutGuest';
import {computed, shallowRef, watch} from 'vue';
import { useRoute } from 'vue-router'

export default {
    name: 'AppContainer',
    setup() {
        // const layout = shallowRef(LayoutGuest);
        // let layout = 'LayoutGuest';
        const route = useRoute();

        const layout = computed(() => {
            return route.meta.layout || 'LayoutGuest';
        });


        // watch(
        //     () => route.meta,
        //     async meta => {
        //         const layoutClass = meta?.layout !== undefined
        //             ? meta.layout
        //             : 'LayoutGuest';
        //
        //         //const component = await import(`../layouts/${layoutClass}`);
        //         //layout.value = component.default;
        //         layout = layoutClass;
        //         console.log(layout);
        //     },
        //     { immediate: true }
        // )

        return {layout};
    },
}
</script>
