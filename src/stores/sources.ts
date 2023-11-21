import { getIndividuals, getOrganisations } from "@/services/sources";
import { Individual } from "@/services/model/individual";
import { defineStore } from "pinia";
import { ref } from "vue";
import { Organisation } from "@/services/model/organisation";

export const useSources = defineStore("Individuals", ()=>{
    const individuals = ref<Individual[]>();
    const organisations = ref<Organisation[]>();
    async function loadAll() {
        if (!individuals.value) {
            individuals.value = await getIndividuals();
        }
        if (!organisations.value) {
            organisations.value = await getOrganisations();
        }
    }
    return {
        individuals,
        organisations,
        loadAll
    }
});
