import { z } from 'zod';

export const CoordinatesSchema = z.object({
  lat: z.number(),
  lon: z.number()
});

export type TCoordinates = z.infer<typeof CoordinatesSchema>;
