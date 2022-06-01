import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dog } from '../models/dog';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.scss']
})
export class DogCardComponent implements OnInit {

  @Input() dog!: Dog;
  @Output() barkChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  bark(): void {
    this.barkChange.emit(this.dog.bark);
  }
}
