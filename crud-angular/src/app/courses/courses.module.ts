import { SharedModuleModule } from './../shared/shared-module/shared-module.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModuleModule
  ]
})
export class CoursesModule { }
