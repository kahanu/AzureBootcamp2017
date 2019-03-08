import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { GolfclubsComponent } from './golfclubs/golfclubs.component';
import { GolfersComponent } from './golfers/golfers.component';
import { ManageGolfClubComponent } from './golfclubs/manage-golf-club/manage-golf-club.component';
import { PortalGolfCoursesForGolfClubComponent } from './golfclubs/portal-golf-courses-for-golf-club/portal-golf-courses-for-golf-club.component';
import { ManageCourseComponent } from './golfclubs/manage-course/manage-course.component';
import { ManageTeeComponent } from './golfclubs/portal-golf-courses-for-golf-club/manage-tee/manage-tee.component';
import { ViewRoundsComponent } from './golfers/view-rounds/view-rounds.component';
import { AddRoundComponent } from './golfers/add-round/add-round.component';
import { ManageGolferComponent } from './golfers/manage-golfer/manage-golfer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PortalRoutingModule,
    SharedModule
  ],
  declarations: [PortalComponent,
  GolfclubsComponent,
  GolfclubsComponent,
  GolfersComponent,
  ManageGolfClubComponent,
  PortalGolfCoursesForGolfClubComponent,
  ManageCourseComponent,
  ManageTeeComponent,
  ViewRoundsComponent,
  AddRoundComponent,
  ManageGolferComponent]
})
export class PortalModule { }
