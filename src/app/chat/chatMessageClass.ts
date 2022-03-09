export class ChatMessage {
    user: string;
    message: string;
    hour: number;
    minutes: number;

    constructor(user: string, message: string, timestamp: number){
        this.user = user;
        this.message = message;
        this.hour = new Date(timestamp).getHours();
        this.minutes = new Date(timestamp).getMinutes();
    }
}
