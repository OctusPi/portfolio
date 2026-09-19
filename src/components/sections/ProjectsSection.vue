<template>
    <section id="projetos" class="py-20 md:py-28">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div v-reveal class="max-w-2xl">
                <p class="eyebrow">Projetos</p>
                <h2 class="section-title">Produtos que eu construí</h2>
                <p class="mt-4 text-lg text-slate-400">
                    Sistemas para saúde, educação e pequenos negócios, no ar e em uso todos os dias.
                </p>
            </div>

            <!-- Destaque -->
            <article v-reveal
                class="card relative mt-12 overflow-hidden border-brand-400/20 bg-gradient-to-br from-brand-600/15 via-transparent to-transparent p-6 sm:p-10">
                <div class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-[100px]"
                    aria-hidden="true"></div>
                <div class="relative">
                    <div class="flex flex-wrap items-center gap-3">
                        <h3 class="text-2xl font-bold text-white sm:text-3xl">{{ spotlight.name }}</h3>
                        <span
                            class="inline-flex items-center gap-1.5 rounded-full border border-amber-300/20 bg-amber-300/10 px-2.5 py-0.5 text-xs font-medium text-amber-200">
                            <span class="h-1.5 w-1.5 rounded-full bg-amber-300"></span>
                            {{ spotlight.status }}
                        </span>
                    </div>
                    <p class="mt-3 max-w-2xl text-lg text-slate-300">{{ spotlight.tagline }}</p>

                    <ul class="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                        <li v-for="f in spotlight.features" :key="f.title" class="border-l border-brand-400/30 pl-4">
                            <p class="font-semibold text-white">{{ f.title }}</p>
                            <p class="mt-1 text-sm leading-snug text-slate-400">{{ f.desc }}</p>
                        </li>
                        <!-- Tags ocupam o espaço restante da última linha -->
                        <li class="flex flex-wrap content-end gap-2 pt-2 sm:col-span-2 lg:col-span-2 lg:justify-end">
                            <span v-for="t in spotlight.tags" :key="t" class="tag">{{ t }}</span>
                        </li>
                    </ul>
                </div>
            </article>

            <!-- Sistemas no ar -->
            <ul class="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                <li v-for="(p, i) in projects" :key="p.name" v-reveal="(i % 3) * 80">
                    <a :href="p.url" target="_blank" rel="noopener"
                        class="card card-hover group relative flex h-full flex-col p-6">
                        <div class="flex items-start justify-between gap-3">
                            <div>
                                <h3 class="text-lg font-semibold text-white">{{ p.name }}</h3>
                                <p class="mt-0.5 font-mono text-xs text-slate-500">{{ domain(p.url) }}</p>
                            </div>
                            <ArrowUpRightIcon
                                class="h-5 w-5 shrink-0 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-300" />
                        </div>
                        <p class="mt-4 text-slate-400">{{ p.desc }}</p>
                        <ul class="mt-4 flex-1 space-y-2">
                            <li v-for="f in p.features" :key="f" class="flex gap-2 text-sm text-slate-400">
                                <CheckIcon class="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                                <span>{{ f }}</span>
                            </li>
                        </ul>
                        <div class="mt-6 flex items-center justify-between gap-3">
                            <ul class="flex flex-wrap gap-2">
                                <li v-for="t in p.tags" :key="t" class="tag">{{ t }}</li>
                            </ul>
                            <span class="inline-flex shrink-0 items-center gap-1.5 text-xs text-emerald-300">
                                <span class="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                                No ar
                            </span>
                        </div>
                    </a>
                </li>
                <li v-reveal="160">
                    <a :href="profile.github" target="_blank" rel="noopener"
                        class="group flex h-full min-h-[200px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/10 p-6 text-center transition hover:border-brand-400/40 hover:bg-white/[0.02]">
                        <IconGithub class="h-8 w-8 text-slate-500 transition group-hover:text-white" />
                        <p class="font-semibold text-white">Veja mais no GitHub</p>
                        <p class="text-sm text-slate-400">Código, estudos e projetos pessoais</p>
                    </a>
                </li>
            </ul>

            <!-- Anteriores -->
            <div v-reveal class="mt-14">
                <h3 class="font-mono text-sm text-slate-500">Projetos anteriores</h3>
                <ul class="mt-4 grid gap-x-8 gap-y-4 border-t border-white/5 pt-6 sm:grid-cols-2">
                    <li v-for="p in pastProjects" :key="p.name">
                        <p class="font-medium text-white">{{ p.name }}</p>
                        <p class="text-sm text-slate-400">{{ p.desc }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowUpRightIcon, CheckIcon } from '@heroicons/vue/20/solid'
import IconGithub from '@/components/icons/IconGithub.vue'
import { pastProjects, profile, projects, spotlight } from '@/data/profile'

const domain = url => new URL(url).hostname
</script>
