<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PrimaryHeader from '@/components/PrimaryHeader.vue';
import PrimaryFooter from '@/components/PrimaryFooter.vue';

</script>

<template>
  
  <PrimaryHeader />
  <main class="max-w-7xl p-6 lg:px-8 mx-auto main">
    <RouterView />
  </main>
  <PrimaryFooter />
</template>