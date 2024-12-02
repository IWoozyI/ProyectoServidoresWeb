import {WebSocketGateway,WebSocketServer,SubscribeMessage,MessageBody,OnGatewayConnection,OnGatewayDisconnect,} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
  
  @WebSocketGateway({cors:true})
  export class UsuarioGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;
  
    handleConnection(client: Socket) {
      console.log(`Client connected: ${client.id}`);
    }
  
    handleDisconnect(client: Socket) {
      console.log(`Client disconnected: ${client.id}`);
    }
  
    // Método para emitir eventos a los clientes
    notifyUsuarioChanges(event: string, payload: any) {
      this.server.emit(event, payload);
    }
  
    // Escuchar eventos personalizados desde los clientes si es necesario
    @SubscribeMessage('customEvent')
    handleCustomEvent(@MessageBody() data: any): string {
      console.log('Custom event received:', data);
      return 'Acknowledged';
    }
  }
  