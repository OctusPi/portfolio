<template>
    <section id="experiencia" class="py-20 md:py-28">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div v-reveal class="max-w-2xl">
                <p class="eyebrow">Experiência</p>
                <h2 class="section-title">Trajetória profissional</h2>
            </div>

            <ol class="relative mt-12 space-y-8 border-l border-white/10 pl-6 sm:pl-10">
                <li v-for="(e, i) in experience" :key="e.role" v-reveal="i * 100" class="relative">
                    <span class="absolute -left-[31px] top-6 h-3 w-3 rounded-full ring-4 ring-ink-950 sm:-left-[47px]"
                        :class="e.current ? 'bg-brand-400 shadow-[0_0_12px] shadow-brand-400' : 'bg-slate-600'"
                        aria-hidden="true"></span>
                    <article class="card card-hover p-6">
                        <div class="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h3 class="text-lg font-semibold text-white">{{ e.role }}</h3>
                                <p class="text-slate-400">{{ e.company }}</p>
                            </div>
                            <span class="tag shrink-0 self-start"
                                :class="{ '!border-brand-400/30 !text-brand-200': e.current }">{{ e.period }}</span>
                        </div>
                        <p class="mt-4 text-slate-400">{{ e.desc }}</p>
                        <ul class="mt-4 flex flex-wrap gap-2">
                            <li v-for="t in e.tags" :key="t" class="tag">{{ t }}</li>
                        </ul>
                    </article>
                </li>
            </ol>
        </div>
    </section>
</template>

<script setup>
import { experience } from '@/data/profile'
</script>
