import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchemaRoutingModule } from './schema-routing.module';
import { SchemaComponent } from './schema.component';
import { GolfClubComponent } from './golf-club/golf-club.component';
import { GolferComponent } from './golfer/golfer.component';

@NgModule({
  imports: [
    CommonModule,
    SchemaRoutingModule
  ],
  declarations: [SchemaComponent, GolfClubComponent, GolferComponent]
})
export class SchemaModule { }
