import {Component, OnInit} from '@angular/core';
import {Donut} from "../../model/donut.model";
import {DonutService} from "../../services/donut.service";
import {RouterModule} from "@angular/router";
import {DonutCardComponent} from "../../components/donut-card/donut-card.component";
import {NgForOf, NgIf} from "@angular/common";

// smart component
@Component({
  standalone: true,
  imports: [RouterModule, DonutCardComponent, NgForOf, NgIf],
  providers: [DonutService],
  selector: 'app-donut-list',
  template: `

    <div class="donut-list-action">
      <a routerLink="new" class="btn btn--green">
        New Donut
        <img src="/assets/img/icon/plus.svg">
      </a>
    </div>
    <ng-container *ngIf="donuts?.length; else nothing">
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
    `.donut-list {&-actions {margin-bottom: 10px;}}
    `
  ]
})
export class DonutListComponent implements OnInit {
  donuts: Donut[] = [];

  constructor(private donutService: DonutService) {
  }

  ngOnInit(): void {
    this.donutService
      .read()
      .subscribe((donuts: Donut[]) => this.donuts = donuts);
  }

  trackById(index: number, value: Donut) {
    return value.id;
  }
}
