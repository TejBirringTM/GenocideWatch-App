import { z } from "zod";
import { ContentType, DateTime, EvidenceType, GeoCoord, IncidentType, NeverEmptyText } from "./common";

export const Evidence = z.object({
    //
    contentURL: NeverEmptyText,
    contentHash: NeverEmptyText,
    contentType: ContentType,
    //
    title: NeverEmptyText,
    evidenceType: EvidenceType,
    incidentType: IncidentType.array(),
    //
    dateTime: DateTime.nullish(),
    geoCoord: GeoCoord.nullish(),
    // 
    // authors: UUID.array().nullish(),
    // individualPublishers: UUID.array().nullish(),
    // organisationalPublishers: UUID.array().nullish()
});

export type Evidence = z.infer<typeof Evidence>;
