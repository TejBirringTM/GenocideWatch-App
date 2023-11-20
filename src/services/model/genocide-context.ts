import { z } from "zod";
import { Evidence } from "./evidence";

export const GenocideContext = z.object({
    id: z.string().uuid(),
    slug: z.string(),
    name: z.string(),
    mapDefaultZoom: z.number().nullish(),
    mapDefaultGeoCoord: z.object({
            lat: z.number(),
            lng: z.number()
    }).nullish(),
    nTestimonies: z.number().int().nonnegative(),
    testimonies: Evidence.array().nullish()
});

export type GenocideContext = z.infer<typeof GenocideContext>;
