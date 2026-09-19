<template>
    <section id="contato" class="py-20 md:py-28">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div v-reveal
                class="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-brand-600/20 via-ink-900 to-ink-900 p-6 sm:p-10 lg:p-14">
                <div class="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-500/20 blur-[100px]"
                    aria-hidden="true"></div>

                <div class="relative grid gap-10 lg:grid-cols-2 lg:gap-14">
                    <div>
                        <p class="eyebrow">Contato</p>
                        <h2 class="section-title">Vamos construir algo juntos?</h2>
                        <p class="mt-4 text-lg text-slate-400">
                            Estou aberto a oportunidades como desenvolvedor Full Stack e a novos projetos.
                            Respondo todas as mensagens.
                        </p>

                        <div class="mt-8 space-y-3">
                            <div class="card flex items-center gap-4 p-4">
                                <div class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-300">
                                    <EnvelopeIcon class="h-5 w-5" />
                                </div>
                                <div class="min-w-0 flex-1">
                                    <p class="text-xs text-slate-500">E-mail</p>
                                    <a :href="`mailto:${profile.email}`"
                                        class="block truncate font-medium text-white hover:text-brand-200">{{ profile.email }}</a>
                                </div>
                                <button type="button" @click="copyEmail"
                                    class="rounded-lg px-3 py-1.5 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white">
                                    <span aria-live="polite">{{ copied ? 'Copiado!' : 'Copiar' }}</span>
                                </button>
                            </div>
                            <a :href="profile.github" target="_blank" rel="noopener"
                                class="card card-hover flex items-center gap-4 p-4">
                                <div class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/[0.06] text-white">
                                    <IconGithub class="h-5 w-5" />
                                </div>
                                <div class="min-w-0 flex-1">
                                    <p class="text-xs text-slate-500">GitHub</p>
                                    <p class="truncate font-medium text-white">{{ profile.github.replace('https://', '') }}</p>
                                </div>
                                <ArrowUpRightIcon class="h-5 w-5 text-slate-500" />
                            </a>
                        </div>
                    </div>

                    <form class="space-y-4" @submit.prevent="submitForm">
                        <div class="grid gap-4 sm:grid-cols-2">
                            <label class="block">
                                <span class="field-label">Nome</span>
                                <input v-model.trim="form.name" type="text" name="name" autocomplete="name" required
                                    placeholder="Seu nome" class="field" />
                            </label>
                            <label class="block">
                                <span class="field-label">Empresa <span class="text-slate-600">(opcional)</span></span>
                                <input v-model.trim="form.company" type="text" name="company" autocomplete="organization"
                                    placeholder="Onde você trabalha" class="field" />
                            </label>
                        </div>
                        <label class="block">
                            <span class="field-label">Mensagem</span>
                            <textarea v-model.trim="form.message" name="message" rows="6" required
                                placeholder="Conte sobre a vaga ou o projeto..." class="field resize-y"></textarea>
                        </label>
                        <button type="submit" class="btn-primary w-full">
                            Enviar mensagem
                            <PaperAirplaneIcon class="h-4 w-4" />
                        </button>
                        <p class="text-center text-xs text-slate-500">
                            Abre o seu aplicativo de e-mail com a mensagem pronta.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ArrowUpRightIcon, EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/vue/20/solid'
import IconGithub from '@/components/icons/IconGithub.vue'
import { profile } from '@/data/profile'

const form = reactive({ name: '', company: '', message: '' })
const copied = ref(false)

const copyEmail = async () => {
    try {
        await navigator.clipboard.writeText(profile.email)
        copied.value = true
        setTimeout(() => (copied.value = false), 2000)
    } catch {
        window.location.href = `mailto:${profile.email}`
    }
}

// Sem backend: monta um e-mail pronto no cliente de e-mail do visitante
const submitForm = () => {
    const from = form.company ? `${form.name} (${form.company})` : form.name
    const subject = encodeURIComponent(`Contato pelo portfólio — ${from}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${from}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
}
</script>

<style scoped>
.field-label {
    @apply mb-1.5 block text-sm font-medium text-slate-300;
}

.field {
    @apply block w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-white placeholder:text-slate-600 transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/30;
}
</style>
