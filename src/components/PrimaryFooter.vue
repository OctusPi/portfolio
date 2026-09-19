<template>
    <footer class="border-t border-white/5">
        <div
            class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
            <img class="h-8 w-auto opacity-80" src="../assets/imgs/logo-white-named-h.svg" alt="OctusPi" />
            <p>© {{ year }} {{ profile.name }}. Feito com Vue.js e Tailwind CSS.</p>
            <div class="flex items-center gap-4">
                <a :href="`mailto:${profile.email}`" class="footer-link">E-mail</a>
                <a :href="profile.github" target="_blank" rel="noopener" class="footer-link">GitHub</a>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { profile } from '@/data/profile'

const year = new Date().getFullYear()
</script>

<style scoped>
.footer-link {
    @apply text-slate-400 transition-colors hover:text-white;
}
</style>
