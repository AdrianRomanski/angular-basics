import {Component, OnInit} from '@angular/core';
import {Donut} from "../../model/donut.model";

// smart component
@Component({
  selector: 'app-donut-list',
  template: `
    <app-donut-card [donut]="donuts[0]"></app-donut-card>
    <app-donut-card [donut]="donuts[1]"></app-donut-card>
    <app-donut-card [donut]="donuts[2]"></app-donut-card>
  `,
  styles: [
    `
    `
  ]
})
export class DonutListComponent implements OnInit{
  donuts: Donut[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.donuts = [
      {
        id: 'y331251',
        name: 'Just Chocolate',
        icon: 'just-chocolate',
        price: 119,
        promo: true,
        description: 'For the pure chocoholic'
      },
      {
        id: 'y331252',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        description: 'Sticky perfection'
      },
      {
        id: 'y331251',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 159,
        description: 'Chocolate drizzled with caramel'
      }
    ];
  }

}
