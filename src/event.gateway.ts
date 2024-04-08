import { NontiReceiverService } from './nonti-receiver/nonti-receiver.service';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway()
export class EventGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;
  constructor(private readonly nontiReceiverService: NontiReceiverService) {}

  afterInit(socket: Socket): any {
    console.log(socket);
  }

  async handleConnection(socket: Socket) {
    const authHeader = socket.handshake.headers.authorization;
    const token = (authHeader as string).split(' ')[1];
    if (authHeader && token) {
      try {
        const id = await this.nontiReceiverService.authToken(token);
        socket.data.id = id;

        console.log('☣️👻👻 >>> handleConnection >>> id: ', id);
      } catch (err) {
        socket.disconnect();
      }
    } else {
      socket.disconnect();
    }
  }

  handleDisconnect(socket: Socket) {
    console.log('disconnect with user id:', socket.data?.id);
  }
}
