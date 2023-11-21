import client from "./api-client";
import { Individual } from "./model/individual";
import { Organisation } from "./model/organisation";

export async function getIndividuals() {
    try {
        const response = await client.get("individual");
        const responseData = JSON.parse(response.data);
        const data = Individual.array().parse(responseData.data);
        return data;
    } catch (e) {
        console.error("Failed to get individuals.", e);
        throw e;
    }
}

export async function getOrganisations() {
    try {
        const response = await client.get("organisation");
        const responseData = JSON.parse(response.data);
        const data = Organisation.array().parse(responseData.data);
        return data;
    } catch (e) {
        console.error("Failed to get organisations.", e);
        throw e;
    }
}
