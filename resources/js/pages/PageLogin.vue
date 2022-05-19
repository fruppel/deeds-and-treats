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
        <div class="mt-4">
            <form-label for="password">Password</form-label>
            <form-input
                v-model="form.password"
                type="password"
                name="password"
                id="password"
                @keyup.enter="submit"
            />
            <form-error :error="errors.password" />
        </div>
        <div class="mt-6">
            <button
                @click="submit"
                type="submit"
                class="block w-full py-2 rounded-md bg-teal-500 text-white font-semibold"
            >
                Login
            </button>

            <div class="mt-5">
                <router-link to="/register" class="block py-1 underline">Neuen Account erstellen</router-link>
                <router-link to="/forgot-password" class="block py-1 underline">Passwort vergessen?</router-link>
            </div>
        </div>
    </auth-screen>
</template>
<script setup>
import AuthScreen from '../components/AuthScreen';
import FormLabel from '../components/FormLabel';
import FormInput from '../components/FormInput';
import {RouterLink, useRouter, useRoute} from 'vue-router';
import useAuthStore from '@/stores/auth';
import {ref, computed} from 'vue';
import FormError from '@/components/FormError';

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const form = ref({
    email: '',
    password: '',
});

const errors = computed(() => authStore.errors);

const submit = async () => {
    await authStore.login({
        email: form.value.email,
        password: form.value.password
    });
    await router.push({
        path: route.query.redirect || '/dashboard'
    });
}
</script>
