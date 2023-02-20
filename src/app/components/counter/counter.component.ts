import { Component, OnInit } from '@angular/core';
import { CounterStore } from './../../store/counter.store';
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(public counterStore: CounterStore) { }

  ngOnInit(): void {
  }

}
