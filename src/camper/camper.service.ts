import { Injectable } from '@nestjs/common';

@Injectable()
export class CamperService {
  async getAllCampers() {
    return {message: 'Усі кампери'}
  }
}
