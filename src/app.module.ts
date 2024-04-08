import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NontiReceiverModule } from './nonti-receiver/nonti-receiver.module';

@Module({
  imports: [NontiReceiverModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
