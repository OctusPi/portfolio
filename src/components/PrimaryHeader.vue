<template>
    <header class="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
        :class="scrolled ? 'border-b border-white/5 bg-ink-950/80 backdrop-blur-xl' : 'max-md:bg-ink-950/80 max-md:backdrop-blur-xl'">
        <div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
            <a href="#inicio" class="shrink-0" @click.prevent="scrollToSection('inicio')">
                <span class="sr-only">{{ profile.name }} — início</span>
                <img class="h-9 w-auto" src="../assets/imgs/logo-named-h.svg" alt="" />
            </a>

            <nav class="hidden md:block" aria-label="Seções">
                <ul class="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
                    <li v-for="s in navItems" :key="s.id">
                        <a :href="`#${s.id}`" class="nav-pill" :class="{ 'nav-pill-active': active === s.id }"
                            :aria-current="active === s.id ? 'true' : undefined" @click.prevent="scrollToSection(s.id)">
                            {{ s.label }}
                        </a>
                    </li>
                </ul>
            </nav>

            <div class="flex items-center gap-2">
                <a :href="profile.github" target="_blank" rel="noopener"
                    class="grid h-10 w-10 place-items-center rounded-full text-slate-400 transition hover:bg-white/5 hover:text-white">
                    <span class="sr-only">GitHub</span>
                    <IconGithub class="h-5 w-5" />
                </a>
                <a href="#contato" class="btn-primary !px-4 !py-2 text-sm" @click.prevent="scrollToSection('contato')">
                    Contratar
                </a>
            </div>
        </div>

        <!-- Mobile: faixa de navegação com rolagem horizontal -->
        <nav class="md:hidden" aria-label="Seções">
            <ul ref="strip" class="no-scrollbar flex gap-1 overflow-x-auto px-4 pb-3">
                <li v-for="s in navItems" :key="s.id" :data-id="s.id" class="shrink-0">
                    <a :href="`#${s.id}`" class="nav-pill" :class="{ 'nav-pill-active': active === s.id }"
                        :aria-current="active === s.id ? 'true' : undefined" @click.prevent="scrollToSection(s.id)">
                        {{ s.label }}
                    </a>
                </li>
            </ul>
        </nav>

        <div class="absolute inset-x-0 bottom-0 h-px">
            <div class="h-full origin-left bg-gradient-to-r from-brand-500 via-fuchsia-400 to-brand-300"
                :style="{ transform: `scaleX(${progress})` }"></div>
        </div>
    </header>
</template>

<script setup>
import { ref, watch } from 'vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import { profile, sections } from '@/data/profile'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { scrollToSection } from '@/composables/navigation'

const navItems = sections.filter(s => s.id !== 'inicio')
const { active, progress, scrolled } = useScrollSpy(sections.map(s => s.id))

// Mantém a seção ativa visível na faixa horizontal do mobile
const strip = ref(null)
watch(active, id => {
    const el = strip.value?.querySelector(`[data-id="${id}"]`)
    if (!el) return
    strip.value.scrollTo({ left: el.offsetLeft - strip.value.clientWidth / 2 + el.clientWidth / 2, behavior: 'smooth' })
})
</script>

<style scoped>
.nav-pill {
    @apply block whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-white;
}

.nav-pill-active {
    @apply bg-white/10 text-white;
}
</style>
