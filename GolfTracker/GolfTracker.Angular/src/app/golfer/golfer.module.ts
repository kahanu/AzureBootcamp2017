import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';

import { GolferComponent, GolferRoutingModule } from './index';
import { GolferListComponent } from './golfer-list/golfer-list.component';

@NgModule({
  imports: [
    CommonModule,
    GolferRoutingModule,
    SharedModule
  ],
  declarations: [GolferComponent,
  GolferListComponent]
})
export class GolferModule { }
