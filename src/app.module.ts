import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import config from './config/database.json';

@Module({
  imports: [
    MongooseModule.forRoot(config.connectionString, { useNewUrlParser: true, useUnifiedTopology: true }),
    EventModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
