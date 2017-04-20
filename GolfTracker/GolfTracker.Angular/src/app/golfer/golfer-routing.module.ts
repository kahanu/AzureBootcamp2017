import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GolferComponent } from './index';
import { GolferListComponent } from 'app/golfer/golfer-list/golfer-list.component';

const routes: Routes = [
  { path: '', component: GolferComponent, children: [
    { path: '', component: GolferListComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GolferRoutingModule { }
