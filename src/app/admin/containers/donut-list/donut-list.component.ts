import {Component, OnInit} from '@angular/core';
import {Donut} from "../../model/donut.model";

// smart component
@Component({
  selector: 'app-donut-list',
  template: `
<!--    ng-template [ngIf]=donuts.length-->
    <ng-container *ngIf="donuts.length; else nothing">
      <app-donut-card  *ngFor="let donut of donuts; trackBy: trackById"
                       [donut]="donut">
      </app-donut-card>
    </ng-container>
    <ng-template #nothing>
      <p>No Donuts here...</p>
    </ng-template>
 `,
  styles: [
    `
    `
  ]
})
export class DonutListComponent implements OnInit {
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

  trackById(index: number, value: Donut) {
    console.log(index, value);
  }
}
