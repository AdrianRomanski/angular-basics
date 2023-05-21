import { Injectable } from '@angular/core';
import {Donut} from "../model/donut.model";

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  private donuts: Donut[] = [
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

  constructor() { }

  read(): Donut[] {
    return this.donuts;
  }

  readOne(id: string): Donut {
    const donut = this.read().find((d: Donut) => d.id === id);
    return donut ? donut : {name: '', icon: '', price: 0, description: ''}
  }

  create(payload: Donut) {
    this.donuts = [...this.donuts, payload];
  }

  update(payload: Donut) {
    this.donuts = this.donuts.map((d: Donut) => {
      return d.id === payload.id ? payload : d;
    })
  }

  delete(payload: Donut) {
    this.donuts = this.donuts.filter((donut: Donut) => donut.id !== payload.id);
  }
}
