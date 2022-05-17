import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LelaoRoutingModule } from './lelao-routing.module';
import { ArtsComponent } from './arts/arts.component';


@NgModule({
  declarations: [
    ArtsComponent
  ],
  imports: [
    CommonModule,
    LelaoRoutingModule
  ]
})
export class LelaoModule { }
