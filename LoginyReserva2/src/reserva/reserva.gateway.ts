import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class ReservaGateway {
  @WebSocketServer()
  server: Server;

  emitReservaActualizada(event: string, data: any) {
    this.server.emit(event, data);
  }
}
