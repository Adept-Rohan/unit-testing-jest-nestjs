import { Module } from '@nestjs/common';
import { Testing1Service } from './testing1.service';
import { Testing1Controller } from './testing1.controller';

@Module({
  controllers: [Testing1Controller],
  providers: [
    {
      provide: 'PAYMENT_SERVICE',
      useClass: Testing1Service,
    },
    Testing1Service,
  ],
})
export class Testing1Module {}
