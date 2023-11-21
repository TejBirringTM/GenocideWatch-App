import { z } from "zod";

export const UUID = z.string().uuid();
export const Email = z.string().email();
export const URL = z.string().url();

export const DateTime = z.string().datetime();

export const NeverEmptyText = z.string().min(1);
export const MaybeEmptyText = z.string();
export const ArrayOfMaybeEmptyText = MaybeEmptyText.array();
export const ArrayOfNeverEmptyText = NeverEmptyText.array();

export const GeoCoord = z.object({
    lat: z.number(),
    lng: z.number()
});

export const ContentType = z.union([
    z.literal("Image"),
    z.literal("Video"),
    z.literal("Audio"),
    z.literal("Document"),
    z.literal("Dataset"),
]);

export const IncidentType = z.union([
    z.literal('Forced Labour'),
    z.literal('Cyberattack and Espionage'),
    z.literal('Surveillance'),
    z.literal('Verbal and Psychological Aggression'),
    z.literal('Vandalism'),
    z.literal('Sabotage and Arson'),
    z.literal('Environment Destruction'),
    z.literal('Civil Infrastructure Destruction'),
    z.literal('Assault'),
    z.literal('Armed Assault'),
    z.literal('Firearm Assault'),
    z.literal('Military Assault'),
    z.literal('Missile Strike and Bombardment'),
    z.literal('Chemical and Biological Attack'),
    z.literal('Torture'),
    z.literal('Sexual Violence'),
    z.literal('Desecration and Destruction of Heritage Site'),
    z.literal('Detention, Abduction, and Kidnapping'),
    z.literal('Dispossession, Theft, Robbery, and Extortion')
]);

export const EvidenceType = z.union([
    z.literal('Direct Evidence: Photograph Footage'), 
    z.literal('Direct Evidence: Film Footage'), 
    z.literal('Direct Evidence: Audio Footage'), 
    z.literal('Direct Evidence: Memo'), 
    z.literal('Direct Evidence: Email'),
    z.literal('Direct Evidence: Social Media Post'), 
    z.literal('Direct Evidence: Website Content'),
    z.literal('Direct Evidence: Interview'), 
    z.literal('Direct Evidence: Witness Statement'),
    z.literal('Direct Evidence: Vlog'), 
    z.literal('Direct Evidence: Other'), 
    z.literal('Indirect Evidence: Report'),
    z.literal('Indirect Evidence: Research Paper'),
    z.literal('Indirect Evidence: Scientific Study'),
    z.literal('Indirect Evidence: Survey Data'),
    z.literal('Indirect Evidence: Expert Testimony'),
    z.literal('Indirect Evidence: Financial Record'),
    z.literal('Indirect Evidence: Medical Record'),
    z.literal('Indirect Evidence: Government Report'),
    z.literal('Indirect Evidence: Public Record'),
    z.literal('Indirect Evidence: Other')
]);

export const Count = z.number().int().nonnegative();