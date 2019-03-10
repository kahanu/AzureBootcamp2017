import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/app-layouts/main-layout/main-layout.component';

const routes: Routes = [{
  path: '', component: MainLayoutComponent,
  children: [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about', loadChildren: './about/about.module#AboutModule' }
  ]
},
{ path: 'home', component: MainLayoutComponent, loadChildren: './home/home.module#HomeModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
