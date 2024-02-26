import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Testing1Module } from './testing1/testing1.module';

@Module({
  imports: [Testing1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
