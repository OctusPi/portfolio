<template>
    <section id="sobre" class="py-20 md:py-28">
        <div class="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
            <div v-reveal class="lg:col-span-3">
                <p class="eyebrow">Sobre mim</p>
                <h2 class="section-title">Do dado bruto ao produto em produção</h2>
                <div class="mt-6 space-y-4 text-lg text-slate-400">
                    <p v-for="(p, i) in profile.summary" :key="i">{{ p }}</p>
                </div>

                <div class="card mt-8 flex items-center gap-4 p-5">
                    <div class="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
                        <AcademicCapIcon class="h-6 w-6" />
                    </div>
                    <div>
                        <p class="font-semibold text-white">{{ education.course }}</p>
                        <p class="text-sm text-slate-400">{{ education.school }} · Concluído em {{ education.year }}</p>
                    </div>
                </div>
            </div>

            <div v-reveal="120" class="lg:col-span-2">
                <div class="card h-full p-6">
                    <h3 class="font-semibold text-white">O que eu trago para o time</h3>
                    <ul class="mt-5 space-y-4">
                        <li v-for="h in highlights" :key="h" class="flex gap-3 text-slate-400">
                            <CheckCircleIcon class="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                            <span>{{ h }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { AcademicCapIcon } from '@heroicons/vue/24/outline'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
import { education, highlights, profile } from '@/data/profile'
</script>
