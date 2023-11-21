<script setup lang="ts">
    import { computed, onBeforeMount, ref } from "vue";
    import { useSources } from "../stores/sources"; 
    import TabBox from "@/components/ui/TabBox.vue";

    const sources = useSources();

    onBeforeMount(()=>{
        sources.loadAll();
    })

    const tag = ref("Authors");
    const publishers = computed(()=>{
        const result = [];
        if (sources.individuals) {
            result.push(...sources.individuals.map((i)=>({...i, type: 'individual'})));
        }
        if (sources.organisations) {
            result.push(...sources.organisations.map((o)=>({...o, type: 'organisation'})));
        }
        return result.filter((i)=>i.nPublished > 0);
    });
    const authors = computed(()=>{
        const result = [];
        if (sources.individuals) {
            result.push(...sources.individuals.map((i)=>({...i, type: 'individual'})));
        }
        return result.filter((i)=>i.nAuthored > 0);
    });
</script>

<template>
    <div class="max-w-4xl mx-auto mt-12 mb-40">
        <TabBox :tags="['Authors', 'Publishers']" v-model:active-tag="tag">
            <div v-if="tag === 'Authors'">
                {{ authors }}
            </div>
            <div v-if="tag === 'Publishers'">
                {{ publishers }}
            </div>
        </TabBox>
    </div>
</template>