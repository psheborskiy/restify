import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Auto, AutoDocument } from './schemas/car.schema';
import mongoose from 'mongoose';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Auto.name) private autoModel: Model<AutoDocument>) {}

  async findAll(): Promise<Auto[]> {
    return this.autoModel.find();
  }

  async findOne(id: string): Promise<Auto>  {
    if (mongoose.Types.ObjectId.isValid(id)) {
      return this.autoModel.findById(id);
    } else return null;
  }

  async search(field: string, text: string): Promise<any> {
    return this.autoModel.find({[field]: new RegExp(text)}).exec();
  }

  async create(createCarDto: CreateCarDto)  {
    const newAuto = new this.autoModel(createCarDto);
    return newAuto.save();
  }

  // remove(id: number)  {
  //   return this.autosList = this.autosList.filter(a => a.id == id);
  // }
}
