<template>
    <div v-if="error" class="text-sm text-red-500 mt-1">
        {{ error[0] }}
    </div>
</template>

<script>
export default {
    props: {
        error: Object
    }
}
</script>
