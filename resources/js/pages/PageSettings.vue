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
import AppPageContent from '@/components/AppPageContent';
import FormLabel from '@/components/FormLabel';
import FormSelect from '@/components/FormSelect';

const form = ref({
    theme: 'dark',
})
</script>
