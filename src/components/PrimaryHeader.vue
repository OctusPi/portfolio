<template>
    <header class="primary-header">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">OctusPi</span>
                    <img class="h-16 w-auto" src="../assets/imgs/logo-named-h.svg" alt="" />
                </a>
            </div>
            <Popover>
                <div class="flex lg:hidden">
                    <PopoverButton type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </PopoverButton>
                </div>
                <div class="lg:hidden">
                    <transition enter-active-class="transition duration-200 ease-out"
                        enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100"
                        leave-active-class="transition duration-150 ease-in"
                        leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
                        <PopoverPanel class="fixed right-4 p-2">
                            <RouterLink class="pop-nav-link my-4 flex items-center" v-for="m in menu" :key="m.label"
                                :to="m.to">
                                <component :is="m.icon"></component>
                                {{ m.label }}
                            </RouterLink>
                        </PopoverPanel>
                    </transition>
                </div>
            </Popover>
            <div class="hidden lg:flex lg:gap-x-12">
                <RouterLink class="main-nav-link" v-for="m in menu" :key="m.label" :to="m.to">
                    <component :is="m.icon"></component>
                    {{ m.label }}
                </RouterLink>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { HomeIcon, Bars3Icon, CommandLineIcon, CursorArrowRippleIcon, CurrencyDollarIcon, ChatBubbleLeftEllipsisIcon, InformationCircleIcon } from '@heroicons/vue/24/outline'
import { Popover, PopoverButton, PopoverPanel, PopoverGroup } from '@headlessui/vue'

const menu = ref([
    { label: 'Home', icon: HomeIcon, to: '/' },
    { label: 'Tecnologias', icon: CommandLineIcon, to: '/techs' },
    // {label: 'Soluções', icon:CursorArrowRippleIcon, to:'/solutions'},
    // {label: 'Orçamentos', icon:CurrencyDollarIcon, to:'/budget'},
    { label: 'Contato', icon: ChatBubbleLeftEllipsisIcon, to: '/contacs' },
    { label: 'Sobre', icon: InformationCircleIcon, to: '/about' }
])
</script>

<style scoped>
.main-nav-link {
    text-align: center;
}

.main-nav-link svg {
    width: 24px;
    margin: 0 auto;
}

.pop-nav-link svg {
    width: 24px;
    margin-right: 5px;
}
</style>