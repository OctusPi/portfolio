<script setup>
import { RouterView } from 'vue-router'
import PrimaryHeader from '@/components/PrimaryHeader.vue'
import PrimaryFooter from '@/components/PrimaryFooter.vue'
</script>

<template>
  <a href="#conteudo"
    class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white">
    Pular para o conteúdo
  </a>
  <PrimaryHeader />
  <main id="conteudo">
    <RouterView />
  </main>
  <PrimaryFooter />
</template>
