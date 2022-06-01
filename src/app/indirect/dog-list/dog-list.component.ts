import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../models/dog';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.scss']
})
export class DogListComponent implements OnInit {

  list!: Array<Dog>;
  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.list = this.dogService.dogList;
  }

  onBark(bark: string): void {
    console.log(bark);
  }
}
