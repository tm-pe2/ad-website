import { Injectable } from '@angular/core';
import { ChatMessage } from '../chat/chatMessageClass';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket!: WebSocket;
  chatMessages: ChatMessage[] = [];

  constructor() { }

  public openWebSocket(){
    this.webSocket = new WebSocket('ws://localhost:4300');

    this.webSocket.onopen = () => {
      console.log('Websocket is open');
    };

    this.webSocket.onmessage = (event) => {
      console.log(event.data);
      const chatMessage = JSON.parse(event.data);
      this.chatMessages.push(chatMessage);
    };

    this.webSocket.onclose = () => {
      console.log('Websocket has closed');
    };
  }

  public sendMessage(chatMessage: ChatMessage){
    this.webSocket.send(JSON.stringify(chatMessage));
  }

  public closeWebSocket() {
    this.webSocket.close();
  }
}
