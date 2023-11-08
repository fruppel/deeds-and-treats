<template>
    <app-page-content class="px-4">
        <form-label>Theme</form-label>
        <form-select
            :options="{'dark': 'Dark', 'light': 'Light'}"
            v-model="form.theme"
        />
    </app-page-content>
</template>

<script setup>
import {ref} from 'vue';
import AppPageContent from '@/components/AppPageContent.vue';
import FormLabel from '@/components/FormLabel.vue';
import FormSelect from '@/components/FormSelect.vue';

const form = ref({
    theme: 'dark',
});
</script>
