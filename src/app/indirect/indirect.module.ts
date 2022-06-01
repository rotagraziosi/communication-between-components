import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogCardComponent } from './dog-card/dog-card.component';
import { DogService } from './dog.service';



@NgModule({
  declarations: [
    DogListComponent,
    DogCardComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    DogService
  ],
  exports: [
    DogListComponent
  ]
})
export class IndirectModule { }
