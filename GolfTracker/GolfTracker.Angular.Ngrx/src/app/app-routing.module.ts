import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'app/home';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'golfclubs', loadChildren: 'app/golfclub/golfclub.module#GolfclubModule' },
  { path: 'golfers', loadChildren: 'app/golfer/golfer.module#GolferModule' },
  { path: 'portal', loadChildren: 'app/portal/portal.module#PortalModule' },
  { path: 'schema', loadChildren: 'app/schema/schema.module#SchemaModule' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
