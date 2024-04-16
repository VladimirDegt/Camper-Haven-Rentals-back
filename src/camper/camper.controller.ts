import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CamperService } from './camper.service';

@ApiTags('Операції з камперами')
@Controller('camper')
export class CamperController {
  constructor(private readonly camperService: CamperService) {}

  @ApiOperation({ summary: 'Отримання камперів' })
  @ApiResponse({ status: 200, description: 'Успішне отримання камперів' })
  @Get('all')
  async findAll() {
    return await this.camperService.findAll();
  }

  @ApiOperation({ summary: 'Додати улюблений кампер' })
  @ApiResponse({ status: 201, description: 'Створений кампер' })
  @Post('create')
  async createFavorite(@Body() favoriteData: any) {
    return await this.camperService.createFavorite(favoriteData);
  }

  @ApiOperation({ summary: 'Видалити улюблений кампер' })
  @ApiResponse({ status: 200, description: 'Видалений кампер' })
  @Delete('delete/:id')
  async removeFavorite(@Param('id') favoriteId: string) {
    return await this.camperService.deleteFavorite(favoriteId);
  }

  @ApiOperation({ summary: 'Отримання улюблених камперів' })
  @ApiResponse({ status: 200, description: 'Масив отриманних камперів' })
  @Get('allFavorite')
  async findAllFavorite() {
    return await this.camperService.findAllFavorite();
  }
}
