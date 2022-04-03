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
        </div>
        <div class="mt-4">
            <form-label for="password">Password</form-label>
            <form-input
                v-model="form.password"
                type="password"
                name="password"
                id="password"
            />
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
                <router-link to="/register" class="block py-1">Neuen Account erstellen</router-link>
                <a class="block py-1">Password vergessen?</a>
            </div>
        </div>
    </auth-screen>
</template>
<script>
import AuthScreen from '../components/AuthScreen';
import FormLabel from '../components/FormLabel';
import FormInput from '../components/FormInput';
import { RouterLink } from 'vue-router';
import {AUTH_LOGIN} from '../store/types/actions';

export default {
    components: {
        AuthScreen,
        FormInput,
        FormLabel,
        RouterLink,
    },

    data() {
        return {
            form: {
                email: '',
                password: '',
            }
        };
    },

    methods: {
        async submit() {
            const user = await this.$store.dispatch(AUTH_LOGIN, {
                email: this.form.email,
                password: this.form.password
            });

            await this.$router.push({
                path: this.$route.query.redirect || '/dashboard'
            });
        }
    }
}
</script>
