import {
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { JwtService } from '@nestjs/jwt';
import { Socket } from 'socket.io';
import { Notification } from './entities/notification.entity.js';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:3000',
    credentials: true,
  },
})
export class NotificationGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
   private connectedUsers = new Map<number, Set<Socket>>();
  constructor(
    private readonly jwtService: JwtService,
  ) {}
  

  handleConnection(socket: Socket) {
    try {
      const cookie = socket.handshake.headers.cookie;

      if (!cookie) {
        socket.disconnect();
        return;
      }
      const token = this.extractToken(cookie);

      if (!token) {
        socket.disconnect();
        return;
      }

      const payload = this.jwtService.verify(token);

      const userId = Number(payload.id);

      if (!userId) {
        socket.disconnect();
        return;
      }

      socket.data.userId = userId;

      const userSockets = this.connectedUsers.get(userId) ?? new Set<Socket>();

      userSockets.add(socket);

      this.connectedUsers.set(userId, userSockets);

      console.log(`User ${userId} connected`);
    } catch (error) {
      console.log('websocket Authentication Failed');
      console.error(error);
      socket.disconnect();
    }
  }

  handleDisconnect(socket: Socket) {
    const userId = socket.data.userId;

    if (!userId) {
      return;
    }

    const userSockets = this.connectedUsers.get(userId);

    if (!userSockets) {
      return;
    }

    userSockets.delete(socket);

    if (userSockets.size === 0) {
      this.connectedUsers.delete(userId);
    }

    console.log(`User ${userId} disconnected`);
  }

  sendNotification(userId: number, notification: Notification) {
    const userSockets = this.connectedUsers.get(userId);

    if (!userSockets) {
      return;
    }

    userSockets.forEach((socket) => {
      socket.emit('notification', notification);
    });
  
  }

  private extractToken(cookie: string): string | null {
    const cookies = cookie.split(';');

    const accessTokenCookie = cookies.find((item) =>
      item.trim().startsWith('access_token='),
    );

    if (!accessTokenCookie) {
      return null;
    }

    return accessTokenCookie.trim().split('=')[1];
  }
}
