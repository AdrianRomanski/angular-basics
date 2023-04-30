import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="app">
    <!--sugar syntax-->
    <h1 #heading (click)="handleClick($event)"> {{message.length ? message : 'Nothing here...'}}</h1>
    <h1 [innerText]="message.length ? message : 'Nothing here...'"></h1>
<!--    property binding-->
    <input #messageInput [value]="message" (input)="handleInput($event)">
    <p>{{heading.innerText}}</p>
  </div> `,
  styles: [
    `
      .app {
        margin-top: 50px;
        font-size: 22px;
        color: #fff;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  message: string = 'Hello Angular!'
  newMessage: string = '';
  ngOnInit() {
    this.message = 'Hello World';
    console.log('Hello World!');
  }

  handleClick(event: Event) {
    console.log('clicked', event);
  }

  handleInput(event: Event): void {
    const {value} = event.target as HTMLInputElement;
    this.newMessage = value;
  }
}
