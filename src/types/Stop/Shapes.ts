import { z } from 'zod';

export const ShapeSchema = z.object({
  id: z.string(),
  color: z.string(),
  shape_id: z.string(),
  shapes: z.array(
    z.object({
      lat: z.number(),
      lon: z.number()
    })
  )
});

export type TShape = z.infer<typeof ShapeSchema>;
