import { Controller, Get } from '@nestjs/common';
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
}
