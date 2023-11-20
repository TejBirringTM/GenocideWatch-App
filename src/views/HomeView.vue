<script setup lang="ts">
  import Card from '@/components/ui/Card.vue';
  import Button from '@/components/ui/Button.vue';
  import { useGenocideContexts } from '@/stores/genocide-contexts';
  import { onBeforeMount } from 'vue';

  const genocideContexts = useGenocideContexts();
  onBeforeMount(()=>{
    genocideContexts.loadAll();
  })
</script>


<template>
  <div class="max-w-4xl mx-auto mt-12 mb-40">

    <Card class="bg-base-200" v-for="g of genocideContexts.genocideContexts" :key="g.id">
      <h1 class="font-display text-6xl tracking-wider">{{g.name}} Genocide</h1>
      <p class="text-2xl">{{ g.nTestimonies }} testimonies</p>
      <template #actions>
        <Button text="View Testimonies" size="large" color="primary" @click="$router.push({name:'genocide-context', params: {genocideContext: g.slug}})"/>
      </template>
    </Card>

    <div class="my-12 px-8 sm:border-l-8 sm:border-l-base-200">
      <div class="mb-4 max-w-prose">
        <p class="text-xl font-bold mb-2">
          Evidence Transparency
        </p>
        <p class="mb-2">
          In our dedication to transparency and accuracy, we prioritize direct evidence, 
          such as on-site footage, over indirect evidence. This approach ensures reliability 
          and emphasises our unwavering commitment to openness and accountability.
        </p>
        <p>
          Our platform also archives content from eminent peer-reviewed scholars and 
          non-partisan humanitarian leaders, offering a comprehensive 
          contextual understanding of significant domestic and international 
          events often disregarded by corporate and state-sponsored media.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row gap-4">
        <Button text="View Sources" size="large" color="secondary" />
      </div>
    </div>

  </div>
</template>
