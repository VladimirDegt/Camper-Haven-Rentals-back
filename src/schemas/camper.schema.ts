import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CamperDocument = HydratedDocument<Camper>;

@Schema()
export class Camper {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const CamperSchema = SchemaFactory.createForClass(Camper);
