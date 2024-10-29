import { StopSchema, TStop } from '@appTypes/Stop/StopType';
import data from '@data/244400404_tan-arrets.json';
import { z } from 'zod';

export const getStopInfo = (): TStop[] => {
  return z.array(StopSchema).parse(data);
};
