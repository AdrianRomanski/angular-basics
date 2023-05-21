import {Component, OnInit} from '@angular/core';
import {Donut} from "../../model/donut.model";
import {DonutService} from "../../services/donut.service";

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

  constructor(private donutService: DonutService) {
  }

  ngOnInit(): void {
    this.donuts = this.donutService.read();
  }

  trackById(index: number, value: Donut) {
    return value.id;
  }
}
