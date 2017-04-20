import { Component, EventEmitter, Input, Output, Inject } from '@angular/core';
import { GolfClub, GolfCourse, Tee } from 'app/shared/models/models';
import { GolfclubService, TOASTR_TOKEN, IToastr } from 'app/shared/services';

@Component({
  selector: 'gt-portal-golf-courses-for-golf-club',
  templateUrl: './portal-golf-courses-for-golf-club.component.html',
  styleUrls: ['./portal-golf-courses-for-golf-club.component.css']
})
export class PortalGolfCoursesForGolfClubComponent {
  pageTitle: string = 'Golf Courses For Golf Club';

  @Input() golfclub: GolfClub;
  @Input() isVisible: boolean;
  @Output() close = new EventEmitter();

  dialogTitle: string;
  golfCourseFormIsVisible: boolean;

  tee: Tee;
  golfcourse: GolfCourse;
  teeFormIsVisible: boolean;

  constructor(private _golfClubService: GolfclubService,
    @Inject(TOASTR_TOKEN) private _toast: IToastr) { }

  /**********************************************************************************************
  Begin Course Methods
  **********************************************************************************************/

  ///<author>
  /// KW - Show the course form for editing.
  ///</author>
  ///<summary>
  /// This command shows the form for editing a golf course and populates the
  /// form with the existing golf course.
  ///</summary>
  editCourse(golfClub: GolfClub, golfCourse: GolfCourse, index: number): void {
    // this.hideAllForms();
    this.dialogTitle = 'Edit';

    this.golfclub = golfClub;
    this.golfcourse = golfCourse;

    this.isVisible = false;
    this.golfCourseFormIsVisible = true;
  }

  ///<author>
  /// KW - Delete the selected golf course
  ///</author>
  ///<summary>
  /// This method deletes the selected golf course.
  ///</summary>
  deleteCourse(golfClub: GolfClub, golfCourse: GolfCourse, index: number): void {
    if (confirm('Are you sure you want to delete this golf course?')) {
      if (!golfClub.golfCourses) {
        golfClub.golfCourses = [];
      }

      this._golfClubService.updateGolfClub(golfClub)
        .subscribe(gc => {
          this.closeCoursesPanel();
          golfClub.golfCourses.splice(index, 1);
          // we don't need to do anything here,
          // the deleted course will simply be removed from the
          // list of courses in the UI.
          this._toast.success('The Golf Course was deleted successfully!', 'Delete Golf Course');
        },
        error => this._toast.error('There was an error deleting the Golf Course.'));
    }
  }

  ///<author>
  /// KW - Close the Golf Courses Table
  ///</author>
  ///<summary>
  /// This will close the panel when the X is clicked.
  ///</summary>
  closeCoursesPanel(): void {
    this.isVisible = false;
    this.close.emit(false);
  }

  ///<author>
  /// KW - onCloseManageCourse
  ///</author>
  ///<summary>
  /// Close the ManageCourseComponent directive.
  ///</summary>
  onCloseManageCourse(): void {
    this.golfCourseFormIsVisible = false;
    this.isVisible = true;
  }

  /**********************************************************************************************
  End Course Methods
  **********************************************************************************************/



  /**********************************************************************************************
  Begin Tee Methods
  **********************************************************************************************/

  ///<author>
  /// KW - Show the manage Tee form
  ///</author>
  ///<summary>
  /// This shows the form to Add a new Tee to the selected golf course.
  ///</summary>
  showTeeForm(golfclub: GolfClub, index: number): void {
    this.dialogTitle = 'Add';

    this.golfclub = golfclub;
    this.golfcourse = golfclub.golfCourses[index];
    this.tee = <Tee>{ gender: 'Mens', par: 72 }; // set some defaults for fields

    this.isVisible = false;
    this.teeFormIsVisible = true;
  }

  ///<author>
  /// KW - Edit the selected tee.
  ///</author>
  ///<summary>
  /// This method shows the edit form for the selected tee, and populates
  /// the fields with the Tee data.
  ///</summary>
  editTee(golfclub: GolfClub, golfcourse: GolfCourse, idx: number): void {
    this.dialogTitle = 'Edit';

    this.tee = golfcourse.tees[idx];
    this.golfclub = golfclub;
    this.golfcourse = golfcourse;

    this.isVisible = false;
    this.teeFormIsVisible = true;
  }

  ///<author>
  /// KW - Delete the selected tee.
  ///</author>
  ///<summary>
  /// This method deletes the selected Tee from the golf course.
  ///</summary>
  deleteTee(golfClub: GolfClub, golfCourse: GolfCourse, idx: number): void {
    if (confirm('Are you sure you want to delete this tee?')) {
      golfCourse.tees.splice(idx, 1);

      this._golfClubService.updateGolfClub(golfClub)
        .subscribe(gc => {
          this.teeFormIsVisible = false;
          this._toast.success('The Tee was deleted successfully!', 'Delete Tee');
        },
        error => {
          this._toast.error('There was an error deleting the tee.');
        });
    }
  }

  ///<author>
  /// KW - onCloseTee
  ///</author>
  ///<summary>
  /// Close the tee form.
  ///</summary>
  onCloseTee(): void {
    this.teeFormIsVisible = false;
    this.isVisible = true;
  }


  /**********************************************************************************************
  End Tee Methods
  **********************************************************************************************/

}
