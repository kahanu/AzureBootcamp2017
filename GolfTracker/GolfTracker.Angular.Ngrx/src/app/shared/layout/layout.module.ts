import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './app-layouts/main-layout/main-layout.component';
import { PrimaryNavComponent } from './navigation/primary-nav/primary-nav.component';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [MainLayoutComponent, PrimaryNavComponent],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule { }
