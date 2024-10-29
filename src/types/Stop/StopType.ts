import { z } from 'zod';
import { CoordinatesSchema } from '../CoordinatesType';

export const StopSchema = z.object({
  stop_id: z.string(),
  stop_name: z.string(),
  stop_coordinates: CoordinatesSchema
});

export type TStop = z.infer<typeof StopSchema>;
