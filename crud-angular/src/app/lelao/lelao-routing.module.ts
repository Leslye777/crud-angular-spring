import { ArtsComponent } from './arts/arts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'arts', component: ArtsComponent}
];
0
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LelaoRoutingModule { }
