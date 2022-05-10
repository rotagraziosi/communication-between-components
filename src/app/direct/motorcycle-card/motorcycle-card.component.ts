import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Motorcycle } from '../models/motorcycle';

@Component({
  selector: 'app-motorcycle-card',
  templateUrl: './motorcycle-card.component.html',
  styleUrls: ['./motorcycle-card.component.scss']
})
export class MotorcycleCardComponent implements OnInit {

  @Input() motorcycle!: Motorcycle;
  @Output() vroomChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  vroom(): void {
    this.vroomChange.emit('Vroooooom vroooooom !');
  }

}
