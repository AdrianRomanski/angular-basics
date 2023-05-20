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

<!--      result of *ngFor under the hood-->
<!--      <ng-template ngFor [ngForOf]="donuts" let-donut let-i="index">-->
<!--        <app-donut-card [donut]="donut"></app-donut-card>-->
<!--        {{i}}-->
<!--      </ng-template>-->

<!--      <div-->
<!--        *ngFor="let donut of donuts;-->
<!--         index as i;-->
<!--         odd as o;-->
<!--         even as e"-->
<!--      [style.color]="o ? 'red' : 'blue'">-->
<!--        {{i  + 1}}-->
<!--        {{o}}-->
<!--        {{e}}-->
<!--      </div>-->
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
        promo: 'new',
        description: 'For the pure chocoholic'
      },
      {
        id: 'y331252',
        name: 'Glazed Fudge',
        icon: 'glazed-fudge',
        price: 129,
        promo: 'limited',
        description: 'Sticky perfection'
      },
      {
        id: 'y331251',
        name: 'Caramel Swirl',
        icon: 'caramel-swirl',
        price: 159,
        description: 'Chocolate drizzled with caramel'
      },
      {
        id: 'y33fdsa1251',
        name: 'Sour Supreme',
        icon: 'sour-supreme',
        price: 139,
        description: 'For the sour advocate.'
      },
      {
        id: 'y3fsafs31251',
        name: 'Zesty Lemon',
        icon: 'zesty-lemon',
        price: 129,
        description: 'Delicious luscious lemon'
      }
    ];
  }

  trackById(index: number, value: Donut) {
    return value.id;
  }
}
