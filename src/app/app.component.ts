import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <div class="app">
      <header class="header">
        <img src="../assets/img/logo.svg" alt="Ultimate Donuts" class="logo">
      </header>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      .app {
        background: #fff;
        border-radius: 8px;
        max-width: 400px;
        width: 94%;
        margin: 25px auto;
        padding: 25px;
        border: 4px solid #ef9fc7;
      }

      .header {
        display: flex;
        justify-content: center;
        margin-bottom: 25px;
      }

      .logo {
        width: 100px;
        height: 88px;
      }
    `,
  ],
  imports: [
    RouterOutlet
  ]
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
