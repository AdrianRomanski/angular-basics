import {Component, Input, ViewEncapsulation} from '@angular/core';
import {Donut} from "../../model/donut.model";

@Component({
  selector: 'app-donut-card',
  template: `
    <div class="donut-card"
         [ngClass]="{
            'donut-card-promo': donut.promo,
            'donut-card-new': !donut.promo
         }"
     >
      <img src="/assets/img/{{donut?.icon}}.svg"
           alt="{{donut?.name}}"
           class="donut-card-icon">
      <div>
        <p class="donut-card-name">
          {{donut?.name}}
        </p>
        <p class="donut-card-price">
          {{donut?.price}}
        </p>
      </div>
    </div>
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
        &-price {
          font-size: 14px;
          color: #c14583;
        }
        &-icon {
          width: 50px;
          margin-right: 10px;
        }
        &-promo {
          border: 2px solid #eee;
        }
        &-new {
          border: 2px solid cadetblue;
        }
      }
    `
  ]
})
export class DonutCardComponent {
  @Input()
  donut!: Donut;
}
