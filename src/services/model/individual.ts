import { z } from "zod";
import { ArrayOfNeverEmptyText, Count, Email, MaybeEmptyText, NeverEmptyText, URL, UUID } from "./common";

export const Individual = z.object({
    id: UUID,
    name: NeverEmptyText,
    email: Email.nullish(),
    facebook: URL.nullish(),
    instagram: URL.nullish(),
    linkedIn: URL.nullish(),
    locals: URL.nullish(),
    patreon: URL.nullish(),
    rumble: URL.nullish(),
    twitter: URL.nullish(),
    website: URL.nullish(),
    notes: MaybeEmptyText.nullish(),
    tags: ArrayOfNeverEmptyText.nullish(),
    nAuthored: Count,
    nPublished: Count
});

export type Individual = z.infer<typeof Individual>;