<template>
    <section id="inicio" class="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-40">
        <div class="bg-grid pointer-events-none absolute inset-0" aria-hidden="true"></div>
        <div class="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[120px]"
            aria-hidden="true"></div>

        <div class="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
            <div class="text-center lg:text-left">
                <p v-if="profile.openToWork" v-reveal
                    class="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                    <span class="relative flex h-2 w-2">
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden"></span>
                        <span class="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                    </span>
                    Disponível para novas oportunidades
                </p>

                <h1 v-reveal="80" class="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
                    {{ profile.name }}
                </h1>
                <p v-reveal="140" class="mt-3 text-2xl font-semibold sm:text-3xl">
                    <span class="text-gradient">{{ profile.role }}</span>
                </p>
                <p v-reveal="200" class="mx-auto mt-6 max-w-xl text-lg text-slate-400 lg:mx-0">
                    {{ profile.headline }}
                </p>

                <div v-reveal="260" class="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                    <a href="#contato" class="btn-primary" @click.prevent="scrollToSection('contato')">
                        Vamos conversar
                        <ArrowRightIcon class="h-4 w-4" />
                    </a>
                    <a href="#projetos" class="btn-ghost" @click.prevent="scrollToSection('projetos')">
                        Ver projetos
                    </a>
                </div>

                <dl v-reveal="320"
                    class="mx-auto mt-12 grid max-w-lg grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/[0.07] bg-white/[0.02] py-4 lg:mx-0">
                    <div v-for="s in stats" :key="s.label" class="flex flex-col px-3 text-center">
                        <dt class="order-2 text-xs text-slate-500 sm:text-sm">{{ s.label }}</dt>
                        <dd class="text-2xl font-bold text-white sm:text-3xl">{{ s.value }}</dd>
                    </div>
                </dl>
            </div>

            <div v-reveal="150" class="relative mx-auto order-first lg:order-none lg:-mt-20">
                <div class="absolute -inset-3 rounded-full bg-gradient-to-br from-brand-500 via-fuchsia-500 to-brand-300 opacity-40 blur-2xl"
                    aria-hidden="true"></div>
                <div class="relative rounded-full bg-gradient-to-br from-brand-400 via-fuchsia-400/70 to-brand-600 p-[3px]">
                    <img :src="profile.photo" :alt="`Foto de ${profile.name}`" width="171" height="188"
                        class="h-32 w-32 rounded-full bg-ink-900 object-cover object-top sm:h-40 sm:w-40 lg:h-52 lg:w-52" />
                </div>
                <div
                    class="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/10 bg-ink-900/90 px-3 py-1.5 text-xs text-slate-300 backdrop-blur">
                    <MapPinIcon class="h-3.5 w-3.5 text-brand-300" />
                    {{ profile.location }}
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowRightIcon, MapPinIcon } from '@heroicons/vue/20/solid'
import { pastProjects, profile, projects, stack } from '@/data/profile'
import { scrollToSection } from '@/composables/navigation'

const stats = [
    { value: `${new Date().getFullYear() - profile.careerStart}+`, label: 'anos de código' },
    { value: `${projects.length + pastProjects.length}`, label: 'sistemas entregues' },
    { value: `${stack.reduce((n, g) => n + g.items.length, 0)}`, label: 'tecnologias' }
]
</script>
