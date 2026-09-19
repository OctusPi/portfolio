<template>
    <section id="stack" class="py-20 md:py-28">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div v-reveal class="max-w-2xl">
                <p class="eyebrow">Stack</p>
                <h2 class="section-title">Ferramentas que uso no dia a dia</h2>
                <p class="mt-4 text-lg text-slate-400">
                    Atuo em todas as camadas da aplicação: regras de negócio no servidor, bancos de dados, APIs,
                    interfaces responsivas e o pipeline que leva tudo para produção.
                </p>
            </div>

            <div class="mt-12 space-y-10">
                <div v-for="(g, gi) in stack" :key="g.group" v-reveal="gi * 60"
                    class="grid gap-4 md:grid-cols-[140px_1fr] md:gap-8">
                    <h3 class="pt-1 font-mono text-sm text-slate-500">{{ g.group }}</h3>
                    <ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        <li v-for="t in g.items" :key="t.name" class="card card-hover group flex items-start gap-4 p-4">
                            <div
                                class="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/[0.06] transition group-hover:bg-white/10">
                                <img :src="t.img" :alt="`Logo ${t.name}`" class="h-7 w-7 object-contain" loading="lazy" />
                            </div>
                            <div>
                                <p class="font-semibold text-white">{{ t.name }}</p>
                                <p class="mt-1 text-sm leading-snug text-slate-400">{{ t.desc }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { stack } from '@/data/profile'
</script>
