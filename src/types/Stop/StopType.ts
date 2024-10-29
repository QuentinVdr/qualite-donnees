import { CoordinatesSchema } from '@appTypes/CoordinatesType';
import { z } from 'zod';

export const StopSchema = z.object({
  stop_id: z.string(),
  stop_code: z.string().nullable(),
  stop_name: z.string(),
  stop_coordinates: CoordinatesSchema,
  stop_desc: z.string().nullable(),
  zone_id: z.string().nullable(),
  stop_url: z.string().nullable(),
  location_type: z.enum(['0', '1']),
  parent_station: z.string().nullable(),
  stop_timezone: z.string().nullable(),
  wheelchair_boarding: z.enum(['0', '1', '2']).nullable()
});

export type TStop = z.infer<typeof StopSchema>;
