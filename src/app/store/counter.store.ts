import { Injectable } from '@angular/core';
import { observable, action } from 'mobx-angular';

@Injectable()
export class CounterStore {
  @observable count = 0;

  @action increment() {
    this.count++;
  }

  @action decrement() {
    this.count--;
  }
}
