<script setup lang="ts">
  import { onBeforeMount } from 'vue';
  import { applyTheme } from './features/themes/libs/theme';
  import TopBar from './components/ui/layouts/TopBar.vue';
  import Footer from './components/ui/layouts/Footer.vue';

  onBeforeMount(()=>{
    applyTheme();
  })
</script>

<template>
  <div>
    <TopBar/>
    <main class="my-6">
      <RouterView/>
    </main>
    <Footer/>
  </div>
</template>
