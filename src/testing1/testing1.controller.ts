import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  Inject,
} from '@nestjs/common';
import { Testing1Service } from './testing1.service';
import { CreateTesting1Dto } from './dto/create-testing1.dto';
import { UpdateTesting1Dto } from './dto/update-testing1.dto';
import { Response, Request } from 'express';

@Controller('testing1')
export class Testing1Controller {
  constructor(
    @Inject('PAYMENT_SERVICE')
    private readonly testing1Service: Testing1Service,
  ) {}

  @Get()
  getPayments(@Req() request: Request, @Res() response: Response) {
    const { totalCount, page } = request.query;
    if (!totalCount || !page) {
      response.status(400).send({ msg: 'Bad Request' });
    } else {
      response.status(200);
    }
  }

  @Post()
  create(@Body() createTesting1Dto: CreateTesting1Dto) {
    return this.testing1Service.create(createTesting1Dto);
  }

  @Get()
  findAll() {
    return this.testing1Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testing1Service.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTesting1Dto: UpdateTesting1Dto,
  ) {
    return this.testing1Service.update(+id, updateTesting1Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testing1Service.remove(+id);
  }
}
