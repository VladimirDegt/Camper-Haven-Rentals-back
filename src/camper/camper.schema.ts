import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({
  versionKey: false,
  timestamps: {
    createdAt: true,
    updatedAt: true,
  },
})
export class Camper extends Document {
  @ApiProperty({
    description: 'The name of the camper',
  })
  @Prop()
  name: string;

  @ApiProperty({
    description: 'The price of the camper',
  })
  @Prop()
  price: number;

  @ApiProperty({
    description: 'The rating of the camper',
  })
  @Prop()
  rating: number;

  @ApiProperty({
    description: 'The location of the camper',
  })
  @Prop()
  location: string;

  @ApiProperty({
    description: 'The number of adults the camper can accommodate',
  })
  @Prop()
  adults: number;

  @ApiProperty({
    description: 'The number of children the camper can accommodate',
  })
  @Prop()
  children: number;

  @ApiProperty({
    description: 'The type of engine used in the camper',
  })
  @Prop()
  engine: string;

  @ApiProperty({
    description: 'The transmission type of the camper',
  })
  @Prop()
  transmission: string;

  @ApiProperty({
    description: 'The form of the camper',
  })
  @Prop()
  form: string;

  @ApiProperty({
    description: 'The length of the camper',
  })
  @Prop()
  length: string;

  @ApiProperty({
    description: 'The width of the camper',
  })
  @Prop()
  width: string;

  @ApiProperty({
    description: 'The height of the camper',
  })
  @Prop()
  height: string;

  @ApiProperty({
    description: 'The tank capacity of the camper',
  })
  @Prop()
  tank: string;

  @ApiProperty({
    description: 'The fuel consumption of the camper',
  })
  @Prop()
  consumption: string;

  @ApiProperty({
    description: 'The description of the camper',
  })
  @Prop()
  description: string;

  @ApiProperty({
    description: 'Details of the camper',
  })
  @Prop({ type: Object })
  details: {
    airConditioner: number;
    bathroom: number;
    kitchen: number;
    beds: number;
    TV: number;
    CD: number;
    radio: number;
    shower: number;
    toilet: number;
    freezer: number;
    hob: number;
    microwave: number;
    gas: string;
    water: string;
  };

  @ApiProperty({
    description: 'An array of gallery images for the camper',
    type: [String],
  })
  @Prop({ type: [String] })
  gallery: string[];

  @ApiProperty({
    description: 'An array of reviews for the camper',
    type: [Object],
  })
  @Prop({ type: [{ type: Object }] })
  reviews: {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
  }[];

  @ApiProperty({
    description: 'Whether the camper is marked as favorite or not',
    default: false,
  })
  @Prop({ default: false })
  favorite: boolean;
}

export const CamperSchema = SchemaFactory.createForClass(Camper);
