<template>
    <div>
        <h2 class="uppercase font-semibold text-gray-900">
            Treat aufteilen
        </h2>

        <div class="mt-4">
            <div class="flex">
                <button
                    @click="decrease()"
                    class="bg-gray-100 px-3 rounded-l-md"
                >
                    <MinusIcon></MinusIcon>
                </button>
                <form-input class="rounded-none border-0 text-center" v-model="divideInto" />
                <button
                    @click="increase()"
                    class="bg-gray-100 px-3 rounded-r-md"
                >
                    <PlusIcon></PlusIcon>
                </button>
            </div>

            <form-error :error="treatStore.errors.divideInto" />

            <button
                @click="divide"
                type="button"
                class="w-full mt-4 bg-gray-800 text-white py-2 px-2 rounded-md text-sm uppercase font-semibold"
            >
                Aufteilen
            </button>
        </div>
    </div>
</template>

<script setup>
import FormInput from '@/components/FormInput';
import FormError from '@/components/FormError';
import {PlusIcon, MinusIcon} from 'vue-tabler-icons';
import {ref} from 'vue';
import useTreatStore from '@/stores/treat';

const props = defineProps({
    id: {
        type: Number,
        required: true,
    }
});

const emit = defineEmits(['divided']);

const treatStore = useTreatStore();

const divideInto = ref(2);
const increase = () => divideInto.value++;
const decrease = () => divideInto.value--;
const divide = async () => {
    if (await treatStore.divide(props.id, divideInto.value) === true) {
        emit('divided');
    }
    console.log(treatStore.errors);
};

</script>
