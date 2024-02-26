import { Injectable } from '@nestjs/common';
import { CreateTesting1Dto } from './dto/create-testing1.dto';
import { UpdateTesting1Dto } from './dto/update-testing1.dto';

@Injectable()
export class Testing1Service {
  create(createTesting1Dto: CreateTesting1Dto) {
    return 'This action adds a new testing1';
  }

  findAll() {
    return `This action returns all testing1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testing1`;
  }

  update(id: number, updateTesting1Dto: UpdateTesting1Dto) {
    return `This action updates a #${id} testing1`;
  }

  remove(id: number) {
    return `This action removes a #${id} testing1`;
  }
}
