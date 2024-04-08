import { Body, Controller, Get, Post } from '@nestjs/common';
import { NontiReceiverService } from './nonti-receiver.service';
import { CreateNotiReqDto } from './dto/nonti-create-request.dto';

@Controller('nonti')
export class NontiReceiverController {
  constructor(private nontiReceiverService: NontiReceiverService) {}

  @Post('/nontiReceiver')
  async nontificationReceiver(
    @Body()
    createNotiReqDto: CreateNotiReqDto,
  ): Promise<string> {
    return this.nontiReceiverService.createNonti(createNotiReqDto);
  }

  @Get('/authToken')
  async authToken(): Promise<string> {
    return this.nontiReceiverService.authToken(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjEzYTIzZThmMjUzOGIxNTBjNDFkYmMiLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzEyNTk2ODIwLCJleHAiOjE3MTI2ODMyMjB9.edcKCeFBCHzJ9mNNHBQVGBekirj1PzN5pEpgf_rrbgY',
    );
  }
}
