import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebSocketService } from './websocket.service';
import { ChatMessage } from './chatMessageClass';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  ShowChat = false;

  constructor(public webSocketService: WebSocketService) { }

  //function to allow toggle of chat
  toggleDisplay() {
    this.ShowChat = !this.ShowChat;
  }
  
  //when the webpage has loaded open a websocket connection
  ngOnInit(): void {
    this.webSocketService.openWebSocket();
  }

  //when you close the webpage close the websocket connection
  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  //send the message through the websocket and clear input
  sendMessage(sendForm: NgForm) {
    const chatMessage = new ChatMessage(sendForm.value.user, sendForm.value.message, Date.now());
    this.webSocketService.sendMessage(chatMessage);
    sendForm.controls['message'].setValue("");
  }
}
