import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AutoDocument = Auto & Document;

@Schema({ versionKey: false })
export class Auto {
  @Prop()
  name: string;

  @Prop({ required: true })
  version: string;

  @Prop({ required: true })
  marka: string;

  @Prop({ required: true })
  model: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  currencyId: number;
}

export const AutoSchema = SchemaFactory.createForClass(Auto);