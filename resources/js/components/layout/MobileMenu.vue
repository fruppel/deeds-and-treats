<template>
    <div class="flex items-center sm:hidden ">
        <button class="z-50 text-gray-500 dark:text-gray-200 w-10 h-10 relative focus:outline-none" @click="open = !open">
            <span class="sr-only">Open main menu</span>
            <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
                <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
                <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out" :class="{'opacity-0': open } "></span>
                <span aria-hidden="true" class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
            </div>
        </button>
        <div :class="maskClasses" @click="close" class="fixed h-screen left-0 top-0 filter bg-white/30 backdrop-blur-sm"></div>
        <div :class="drawerClasses" class="fixed h-screen bg-teal-300 left-0 top-0 shadow-xl transition-width transition-slowest ease overflow-hidden">
            <div class="py-4">
                <div class="px-4 my-2 uppercase font-semibold text-gray-900">Menü</div>
                <ul class="mt-4 mb-4">
                    <li v-for="route in routes">
                        <router-link
                            :to="route.href"
                            active-class="bg-teal-200"
                            class="block px-4 py-2 text-lg font-semibold text-black"
                            @click="close"
                        >
                            {{ route.label }}
                        </router-link>
                    </li>
                </ul>

                <a class="px-4 text-black" @click="logout">
                    Abmelden
                </a>
            </div>
        </div>

    </div>
</template>

<script>
import useAuthStore from '@/stores/auth';

export default {
    setup() {
        const authStore = useAuthStore();

        return {
            authStore
        };
    },
    data() {
        return {
            open: false,
            routes: [
                {
                    href: '/dashboard',
                    label: 'Dashboard',
                },
                {
                    href: '/treats',
                    label: 'Treats',
                },
                {
                    href: '/deeds',
                    label: 'Deeds',
                },
                {
                    href: '/settings',
                    label: 'Einstellungen',
                },
            ],
        };
    },

    computed: {
        drawerClasses() {
            return this.open === true
                ? ['w-80']
                : ['w-0']
        },
        maskClasses() {
            return this.open === true
                ? ['w-full']
                : ['w-0']
        }
    },

    methods: {
        close() {
            this.open = false;
        },

        logout() {
            this.authStore.logout();
            this.$router.push({
                path: '/login'
            });
        }
    }
}
</script>

<style scoped>
.router-link-active {
    @apply bg-teal-700;
}
</style>
