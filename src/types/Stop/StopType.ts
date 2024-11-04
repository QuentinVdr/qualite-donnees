import { z } from 'zod';

export const StopChildSchema = z.object({
  name: z.string(),
  location_type: z.string(),
  color: z.string(),
  wheelchair_boarding: z.string(),
  route_text_color: z.string(),
  type: z.number(),
  parent_station: z.string(),
  route_short_name: z.string()
});

export type TStopChild = z.infer<typeof StopChildSchema>;

export const StopSchema = z.object({
  stop_id: z.string(),
  stop_name: z.string(),
  lon: z.string(),
  lat: z.string(),
  childs: z.array(StopChildSchema)
});

export type TStop = z.infer<typeof StopSchema>;
