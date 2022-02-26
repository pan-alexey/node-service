import { Module } from '@nestjs/common';
import { ItemModule } from './modules/item/item.module';
import { Controller } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {}

@Controller()
export class AppController {}

@Module({
  imports: [ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
