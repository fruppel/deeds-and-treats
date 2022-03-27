<template>
    <div class="px-4 py-4">
        <h2 class="uppercase font-semibold text-gray-900">
            {{ title }}
        </h2>

        <div class="mt-4">
            <form-label>Name</form-label>
            <form-input v-model="form.name" />
            <form-error :error="errors.name" />
        </div>

        <div class="mt-4">
            <form-label>Belohnung</form-label>
            <form-input v-model="form.value" />
            <form-error :error="errors.value" />
        </div>

        <div class="mt-6 flex">
            <button
                @click="close"
                type="button"
                class="w-1/2 mr-1 border border-gray-300 rounded-md bg-gray-400 text-gray-800 text-sm uppercase font-semibold"
            >
                Abbrechen
            </button>
            <button
                @click="submit"
                type="button"
                class="w-1/2 bg-teal-500 text-white py-2 px-2 rounded-md text-sm uppercase font-semibold"
            >
                Speichern
            </button>


        </div>
    </div>
</template>

<script>
import FormLabel from './FormLabel';
import FormInput from './FormInput';
import FormError from './FormError';
import {DEED_FETCH_BY_ID, DEED_FETCH_ALL, DEED_STORE, DEED_UPDATE, DRAWER_CLOSE} from '../store/types/actions';
import {mapGetters} from 'vuex';

export default {
    components: {FormInput, FormLabel, FormError},

    props: {
        id: Number,
    },

    data() {
        return {
            form: {
                id: this.id,
                name: null,
                value: null,
            }
        }
    },

    computed: {
        ...mapGetters(['deed', 'errors']),

        title() {
            return this.hasDeed() ? 'Deed bearbeiten' : 'Deed erstellen';
        }
    },

    methods: {
        async submit() {
            const action = this.id ? DEED_UPDATE : DEED_STORE;
            await this.$store.dispatch(action, this.form);
            await this.$store.dispatch(DEED_FETCH_ALL);
            this.close();
        },

        close() {
            this.$store.dispatch(DRAWER_CLOSE);
        },

        async loadDeedById() {
            await this.$store.dispatch(DEED_FETCH_BY_ID, this.id);
            this.form.id = this.deed.id;
            this.form.name = this.deed.name;
            this.form.value = this.deed.value;
        },

        hasDeed() {
            return this.id !== undefined && this.id !== null;
        }
    },

    async mounted() {
        if (this.hasDeed() === true) {
            await this.loadDeedById();
        }
    },
}
</script>
