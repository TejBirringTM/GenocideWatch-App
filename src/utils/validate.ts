import { computed, type Ref } from "vue";
import { ZodString } from "zod";

export function validateInput(schema: ZodString, input: Ref) {
    return computed(()=>{
        const result = schema.safeParse(input.value);
        if (!result.success && result.error.message) {
            console.debug(result.error.message); 
        }
        return result.success;        
    })
}

