import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateNotiReqDto } from './dto/nonti-create-request.dto';

@Injectable()
export class NontiReceiverService {
  constructor() {}

  async createNonti(createNotiReqDto: CreateNotiReqDto): Promise<string> {
    console.log(createNotiReqDto);
    return 'hello world!';
  }

  async authToken(token: string): Promise<any> {
    try {
      const res = await fetch(
        'https://api.spnslot.site/tien-auth-dev-service/auth/profile',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const dataRes = await res.json();
      return dataRes._id;
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
}
