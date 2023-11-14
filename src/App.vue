<script setup lang="ts">
  import { onBeforeMount } from 'vue';
  import { applyTheme } from './features/themes/libs/theme';
  
  onBeforeMount(()=>{
    applyTheme();
  })
</script>

<template>
  <RouterView />
</template>
