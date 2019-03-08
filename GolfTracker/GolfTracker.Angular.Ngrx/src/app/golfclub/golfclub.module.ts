import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';

import { GolfclubComponent, GolfclubListComponent, GolfclubRoutingModule } from './index';
import { GolfCoursesForGolfClubComponent } from './golf-courses-for-golf-club/golf-courses-for-golf-club.component';

@NgModule({
  imports: [
    CommonModule,
    GolfclubRoutingModule,
    SharedModule
  ],
  declarations: [GolfclubComponent,
  GolfclubListComponent,
  GolfCoursesForGolfClubComponent]
})
export class GolfclubModule { }
