import { Module } from '@nestjs/common';
import { Testing1Service } from './testing1.service';
import { Testing1Controller } from './testing1.controller';

@Module({
  controllers: [Testing1Controller],
  providers: [Testing1Service],
})
export class Testing1Module {}
