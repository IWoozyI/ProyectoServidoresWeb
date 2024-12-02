import {WebSocketGateway,WebSocketServer,SubscribeMessage,MessageBody,OnGatewayConnection,OnGatewayDisconnect,} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
  
  @WebSocketGateway({cors:true})
  export class ReservaGateway implements OnGatewayConnection, OnGatewayDisconnect {
      handleConnection(client: any, ...args: any[]) {
          throw new Error('Method not implemented.');
      }
      handleDisconnect(client: any) {
          throw new Error('Method not implemented.');
      }
    
  }
  