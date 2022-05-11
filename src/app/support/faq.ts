
/*export class Faq {

    id: number; 
    question: string;
    answer: string;

    constructor(id: number, question: string, answer: string) 
        {
            this.id = id;
            this.question = question;
            this.answer = answer;
        }
  }*/
 
  export class Faq { // temporary for test api

    id: number; 
    title: string;
    body: string;

    constructor(id: number, question: string, answer: string) 
        {
            this.id = id;
            this.title = question;
            this.body = answer;
        }
  }