<script setup lang="ts">
    const year = new Date().getFullYear();
</script>

<template>
    <footer class="mt-12 p-4 opacity-30 text-right border-dashed border-t">
      Copyright (C) {{ year }} GENOCIDE•WATCH
      <p class="text-xs">Powered by <a class="link" href="https://www.parkourops.com">Parkour Ops</a></p>
    </footer>
</template>