<template>
    <auth-screen>
        <div class="mt-4">
            <form-label for="email">E-Mail</form-label>
            <form-input
                v-model="form.email"
                type="text"
                name="email"
                id="email"
            />
            <form-error :error="errors.email" />
        </div>
        <div class="mt-6">
            <button
                @click="submit"
                type="submit"
                class="block w-full py-2 rounded-md bg-teal-500 text-white font-semibold"
            >
                Passwort zurücksetzen
            </button>
        </div>
    </auth-screen>
</template>

<script setup>
import {ref, computed} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import useAuthStore from '@/stores/auth';
import AuthScreen from '@/components/AuthScreen.vue';
import FormLabel from '@/components/FormLabel.vue';
import FormInput from '@/components/FormInput.vue';
import FormError from '@/components/FormError.vue';

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const form = ref({
    email: '',
});

const errors = computed(() => authStore.errors);

const submit = async () => {
    await authStore.resetPassword({
        email: form.value.email,
    });
    await router.push({
        path: route.query.redirect || '/dashboard'
    });
}
</script>
