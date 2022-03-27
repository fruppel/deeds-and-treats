<template>
    <div :class="maskClass" @click="close" class="fixed h-screen left-0 top-0 filter bg-white/30 backdrop-blur-sm"></div>
    <div
        :class="drawerClass"
        class="fixed h-screen bg-gray-300 left-0 top-0 shadow-xl transition-width transition-slowest ease overflow-hidden"
    >
        <component :is="this.component" v-bind="this.componentProps"></component>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {DRAWER_CLOSE} from '../store/types/actions';

export default {
    computed: {
        ...mapGetters(['drawerOpen', 'component', 'componentProps']),
        drawerClass() {
            return this.drawerOpen === true
                ? ['w-80']
                : ['w-0']
        },
        maskClass() {
            return this.drawerOpen === true
                ? ['w-full']
                : ['w-0']
        }
    },

    methods: {
        close() {
            console.log('method close');
            this.$store.dispatch(DRAWER_CLOSE);
        }
    }
}
</script>
