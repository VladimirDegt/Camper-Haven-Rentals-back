import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Camper } from './camper.schema';

@Injectable()
export class CamperService {
  constructor(@InjectModel(Camper.name) private camperModel: Model<Camper>) {}

  async findAll(): Promise<Camper[]> {
    return this.camperModel.find({});
  }

  async createFavorite(favoriteData: any): Promise<any> {
    const checkCamper = await this.camperModel.findById(
      favoriteData.itemFavorite,
    );
    if (!checkCamper) {
      return 'Not found';
    } else {
      checkCamper.favorite = true;
      await checkCamper.save();
      return this.findAll();
    }
  }

  async deleteFavorite(favoriteId: any): Promise<any> {
    const checkCamper = await this.camperModel.findById(favoriteId);
    if (!checkCamper) {
      return 'Not found';
    } else {
      checkCamper.favorite = false;
      await checkCamper.save();
      return this.findAll();
    }
  }

  async findAllFavorite(): Promise<Camper[]> {
    const favoriteItems = await this.camperModel.find({ favorite: true });
    return favoriteItems;
  }
}
