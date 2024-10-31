import { StopSchema, TStop } from '@appTypes/Stop/StopType';
import data from '@data/data.json';
import shapesData from '@data/shapesData.json';
import { z } from 'zod';
import { ShapeSchema, TShape } from '@appTypes/Stop/Shapes';

export const getStopInfo = (): TStop[] => {
  return z.array(StopSchema).parse(data);
};
export const getShapes = (): TShape[] => {
  return z.array(ShapeSchema).parse(shapesData);
};
