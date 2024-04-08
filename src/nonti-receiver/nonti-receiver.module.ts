import { Module } from '@nestjs/common';
import { NontiReceiverController } from './nonti-receiver.controller';
import { NontiReceiverService } from './nonti-receiver.service';

@Module({
  controllers: [NontiReceiverController],
  providers: [NontiReceiverService],
})
export class NontiReceiverModule {}
