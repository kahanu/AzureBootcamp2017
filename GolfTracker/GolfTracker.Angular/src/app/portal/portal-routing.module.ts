import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent, GolfclubsComponent, GolfersComponent } from './index';

const routes: Routes = [
  { path: '', redirectTo: '/portal/golfclubs', pathMatch: 'full' },
  {
    path: '', component: PortalComponent, children: [
      { path: 'golfclubs', component: GolfclubsComponent },
      { path: 'golfers', component: GolfersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
