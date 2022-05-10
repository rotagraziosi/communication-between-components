import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotorcycleListComponent } from './motorcycle-list/motorcycle-list.component';
import { MotorcycleCardComponent } from './motorcycle-card/motorcycle-card.component';



@NgModule({
  declarations: [
    MotorcycleListComponent,
    MotorcycleCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MotorcycleListComponent]
})
export class DirectModule { }
