import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GolfclubComponent } from './index';
import { GolfclubListComponent } from 'app/golfclub/golfclub-list/golfclub-list.component';

const routes: Routes = [
  {
    path: '', component: GolfclubComponent, children: [
      { path: '', component: GolfclubListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GolfclubRoutingModule { }
