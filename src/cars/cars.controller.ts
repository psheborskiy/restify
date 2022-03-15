import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(
    private readonly carsService: CarsService
  ) { }

  @Get("/list")
  @UseGuards(JwtAuthGuard)
  async getAllCars(): Promise<Object> {
    return await this.carsService.findAll();
  }

  @Get("/one-:id")
  async getCar(@Param() params: any): Promise<Object> {
    const auto = await this.carsService.findOne(params.id);

    if (!auto) 
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND)

    return auto;
  }

  @Get("/searchAuto")
  async searchAuto(@Query() query): Promise<Object> {
    return await this.carsService.search(query.field, query.text);
  }

  @Post("/add")
  @UseGuards(JwtAuthGuard)
  async addCar(@Body() createCarDto: CreateCarDto): Promise<Object> {     
    return this.carsService.create(createCarDto);
  }
}
