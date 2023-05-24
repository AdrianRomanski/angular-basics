import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Donut} from "../../model/donut.model";

@Component({
  selector: 'app-donut-card',
  template: `



    <a   [routerLink]="donut.id"
         class="donut-card"
         [ngClass]="{
            'donut-card-promo': donut.promo === 'new' || donut.promo === 'limited',
            'donut-card-new': !donut.promo
         }"
     >
      <img src="/assets/img/{{donut.icon}}.svg"
           alt="{{donut.name}}"
           class="donut-card-icon">
      <div>
        <p class="donut-card-name">
          {{donut.name}}
          <!--GREAT SYNTAX-->
          <ng-container [ngSwitch]="donut.promo">
            <span class="donut-card-label">
             <ng-template [ngSwitchCase]="'new'">NEW</ng-template>
             <ng-template [ngSwitchCase]="'limited'">LIMITED</ng-template>
             <ng-template ngSwitchDefault>Nothing special..</ng-template>
            </span>
          </ng-container>
        </p>
        <p class="donut-card-price">
          {{donut.price / 100 | currency: 'GBP'}}
        </p>
      </div>
    </a>
  `,
  styleUrls:[],
  styles: [
    `
      //shadow dom specification
      :host {

      }
      .donut-card {
        //border: 4px solid red;
        display: flex;
        align-items: center;
        background: #f7f7f7;
        border-radius: 5px;
        margin-bottom: 5px;
        padding: 5px 15px;
        transition: transform 0.2s ease-in-out;
        &:hover {
          transform: translateY(-3px);
        }
        &-name {
          font-size: 16px;
        }
        &-label {
          border: 1px solid #c14583;
          border-radius: 4px;
          padding: 0 4px;
          margin-left: 5px;
          font-size: 12px;
          color: #c14583;
        }
        &-price {
          font-size: 14px;
          color: #c14583;
        }
        &-icon {
          width: 50px;
          margin-right: 10px;
        }
        &-promo {
          border: 2px solid cadetblue;
        }
        &-new {
          border: 2px solid #eee;
        }
      }
    `
  ]
})
export class DonutCardComponent {
  @Input()
  donut!: Donut;
}
