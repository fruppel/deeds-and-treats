<template>
    <div class="flex">
        <div
            class="flex-1 text-center items-center py-3 my-1"
        >
            {{ germanDate(date) }}
        </div>
        <template v-for="deed in deeds.slice(0, 3)">
            <deeds-button
                :deed="deed"
                :date="date"
            />
        </template>
    </div>
</template>

<script>
import DeedsButton from './DeedsButton';
import {getGermanDate} from '../services/date-service';
import {mapGetters} from 'vuex';

export default {
    components: {
        DeedsButton,
    },
    props: {
        date: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapGetters(['deeds']),
    },
    methods: {
        germanDate(date) {
            return getGermanDate(date);
        },
    }
}
</script>
