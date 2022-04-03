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
import {mapGetters} from 'vuex';
import FormLabel from './FormLabel';
import FormInput from './FormInput';
import FormError from './FormError';
import {
    TREAT_FETCH_BY_ID,
    TREAT_FETCH_ALL,
    TREAT_STORE,
    TREAT_UPDATE,
    DRAWER_CLOSE
} from '../store/types/actions';

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
        ...mapGetters(['treat', 'errors']),

        title() {
            return this.hasTreat() ? 'Treat bearbeiten' : 'Treat erstellen';
        }
    },

    methods: {
        async submit() {
            const action = this.id ? TREAT_UPDATE : TREAT_STORE;
            await this.$store.dispatch(action, this.form);
            await this.$store.dispatch(TREAT_FETCH_ALL);
            this.close();
        },

        close() {
            this.$store.dispatch(DRAWER_CLOSE);
        },

        async loadTreatById() {
            await this.$store.dispatch(TREAT_FETCH_BY_ID, this.id);
            this.form.id = this.treat.id;
            this.form.name = this.treat.name;
            this.form.value = this.treat.value;
        },

        hasTreat() {
            return this.id !== undefined && this.id !== null;
        }
    },

    async mounted() {
        if (this.hasTreat() === true) {
            await this.loadTreatById();
        }
    },
}
</script>
