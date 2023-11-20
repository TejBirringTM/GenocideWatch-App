import { getGenocideContext, getGenocideContexts } from "@/services/genocide-context";
import { GenocideContext } from "@/services/model/genocide-context";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useGenocideContexts = defineStore("Genocide Contexts", ()=>{
    const genocideContexts = ref<GenocideContext[]>();
    async function loadAll() {
        if (!genocideContexts.value) {
            genocideContexts.value = await getGenocideContexts();
        }
    }
    async function loadOne(slug: string) {
        await loadAll();
        const contexts = genocideContexts.value as GenocideContext[];
        const idx = contexts.findIndex((gcd)=>(gcd.slug === slug));
        const id = contexts[idx].id;
        contexts[idx] = await getGenocideContext(id);
        return contexts[idx];
    }

    return {
        genocideContexts,
        loadAll,
        loadOne
    }
});
