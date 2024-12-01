import {
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
    MessageBody,
  } from '@nestjs/websockets';
  import { SeguimientoService } from './seguimiento.service';
  import { Server } from 'socket.io';
  
  @WebSocketGateway({ cors: true })
  export class SeguimientoGateway {
    @WebSocketServer()
    server: Server;
  
    constructor(private readonly seguimientoService: SeguimientoService) {}
  
    @SubscribeMessage('notificarSeguimiento')
    async handleNotification(@MessageBody() data: { paqueteId: number }) {
      const seguimientos = await this.seguimientoService.findByPaqueteId(data.paqueteId);
      this.server.emit('seguimientoActualizado', seguimientos);
    }
  }