import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchemaComponent } from 'app/schema/schema.component';
import { GolfClubComponent as GCComponent } from 'app/schema/golf-club/golf-club.component';
import { GolferComponent as GComponent } from 'app/schema/golfer/golfer.component';

const routes: Routes = [
  { path: '', redirectTo: '/schema/golfclub', pathMatch: 'full' },
  { path: '', component: SchemaComponent, children: [
    { path: 'golfclub', component: GCComponent },
    { path: 'golfer', component: GComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchemaRoutingModule { }
