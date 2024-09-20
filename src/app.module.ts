import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/event.module';

@Module({
  imports: [
    EventsModule,
    MongooseModule.forRoot(
      'mongodb+srv://VovaCodePro:SJXsuQfrZdA0u9mN@cluster0.kq9iw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
