import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { Auto, AutoSchema } from './schemas/car.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Auto.name, schema: AutoSchema }])],
  controllers: [CarsController],
  providers: [CarsService]

})
export class CarModule {}
