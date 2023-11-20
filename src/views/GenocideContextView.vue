<script setup lang="ts">
    import { onBeforeMount, ref } from 'vue';
    import Card from '@/components/ui/Card.vue';
    import { useGenocideContexts } from '@/stores/genocide-contexts';
    import { GenocideContext } from '@/services/model/genocide-context';

    const props = defineProps<{
        genocideContext: string
    }>();

    const genocideContexts = useGenocideContexts();
    const gc = ref<GenocideContext>();
    
    onBeforeMount(async ()=>{
        gc.value = await genocideContexts.loadOne(props.genocideContext);
    })
</script>

<template>
    <div class="max-w-4xl mx-auto mt-12 mb-40" v-if="gc" >
        <div class="px-8">
            <h1 class="text-6xl font-display text-center sm:text-8xl sm:text-left mb-12">The {{ gc.name }} Genocide</h1>
            
            <Card class="bg-base-200" v-for="g in gc.testimonies" :key="g.contentHash">
                {{ g }}
            </Card>
        </div>
    </div>
</template>
