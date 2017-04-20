import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent, HomeRoutingModule } from './index';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
