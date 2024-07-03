import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { TaskViewComponent } from '../task-view/task-view.component';

@NgModule({
  declarations: [
//    TaskViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
//    HttpClient
  ],
  exports: [
//    TaskViewComponent
  ]
})
export class TaskModule { }
