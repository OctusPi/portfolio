<template>
    <header class="primary-header">
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">OctusPi</span>
                    <img class="h-16 w-auto" src="../assets/imgs/logo-named-h.svg" alt="" />
                </a>
            </div>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <PopoverGroup class="hidden lg:flex lg:gap-x-12">
                <RouterLink class="main-nav-link" v-for="m in menu" :key="m.label" :to="m.to">
                    <component :is="m.icon"></component>
                    {{m.label}}
                </RouterLink>
            </PopoverGroup>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue'
import { HomeIcon, CommandLineIcon, CursorArrowRippleIcon, CurrencyDollarIcon, ChatBubbleLeftEllipsisIcon, InformationCircleIcon }  from '@heroicons/vue/24/outline'

const menu = ref([
        {label: 'Home', icon:HomeIcon, to:'/'},
        {label: 'Tecnologias', icon:CommandLineIcon, to:'/#techs'},
        // {label: 'Soluções', icon:CursorArrowRippleIcon, to:'/solutions'},
        // {label: 'Orçamentos', icon:CurrencyDollarIcon, to:'/budget'},
        {label: 'Contato', icon:ChatBubbleLeftEllipsisIcon, to:'/contacs'},
        {label: 'Sobre', icon:InformationCircleIcon, to:'/about'}
    ])
</script>

<style scoped>
    .main-nav-link{
        text-align: center;
    }
    .main-nav-link svg{
        width: 24px;
        margin: 0 auto;        
    }
</style>