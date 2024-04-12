import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Camper } from '../schemas/camper.schema';
import { Model } from 'mongoose';

@Injectable()
export class CamperService {
  constructor(@InjectModel(Camper.name) private catModel: Model<Camper>) {}

  async findAll(): Promise<Camper[]> {
    return this.catModel.find().exec();
  }

}
