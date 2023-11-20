import client from "./api-client";
import { GenocideContext } from "./model/genocide-context";

export async function getGenocideContexts() {
    try {
        const response = await client.get("genocide-context");
        const responseData = JSON.parse(response.data);
        const data = GenocideContext.array().parse(responseData.data);
        return data;
    } catch (e) {
        console.error("Failed to get genocide contexts.", e);
        throw e;
    }    
}

export async function getGenocideContext(id: string) {
    try {
        const response = await client.get(`genocide-context/${id}`, {
            params: {
                deep: "true"
            }
        });
        const responseData = JSON.parse(response.data);
        const data = GenocideContext.parse(responseData.data);
        return data;
    } catch (e) {
        console.error(`Failed to get genocide context: ${id}`, e);
        throw e;
    }
}
