import {WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody, OnGatewayConnection, OnGatewayDisconnect ,} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
  
  @WebSocketGateway({ cors: true })
  export class ReservaGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;
  
    handleConnection(client: Socket) {
      console.log(`Cliente conectado: ${client.id}`);
    }
  
    handleDisconnect(client: Socket) {
      console.log(`Cliente desconectado: ${client.id}`);
    }

    notifyReservaChanges(event: string, payload: any) {
      this.server.emit(event, payload);
    }
  
    @SubscribeMessage('actualizarReserva')
    handleActualizarReserva(@MessageBody() data: any): string {
      console.log('Evento recibido para actualizar reserva:', data);
      return 'Actualización recibida';
    }
  
    @SubscribeMessage('crearReserva')
    handleCrearReserva(@MessageBody() data: any): string {
      console.log('Evento recibido para crear reserva:', data);
      return 'Creación recibida';
    }
  
    @SubscribeMessage('eliminarReserva')
    handleEliminarReserva(@MessageBody() data: any): string {
      console.log('Evento recibido para eliminar reserva:', data);
      return 'Eliminación recibida';
    }
  }
  