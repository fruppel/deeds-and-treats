<template>
    <div class="bg-gray-100 min-h-screen">
        <router-view></router-view>
    </div>
</template>

<script>
import { RouterView } from 'vue-router';

export default {
    components: {
        RouterView
    },
}
</script>
