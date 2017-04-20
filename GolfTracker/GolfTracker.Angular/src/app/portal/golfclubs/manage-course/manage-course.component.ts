import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { GolfClub, GolfCourse } from 'app/shared/models/models';
import { GolfclubService, TOASTR_TOKEN, IToastr } from 'app/shared/services';

@Component({
  selector: 'gt-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.css']
})
export class ManageCourseComponent {
pageTitle: string = 'Manage course';

    @Input() golfclub: GolfClub;
    @Input() golfcourse: GolfCourse;
    @Input() isVisible: boolean;
    @Input() dialogTitle: string;

    @Output() close = new EventEmitter();

    errorMessage: string;

    constructor(private _golfClubService: GolfclubService,
      @Inject(TOASTR_TOKEN) private _toast: IToastr) { }

    ///<author>
    /// KW - Save the golf course
    ///</author>
    ///<summary>
    /// This saves the golf course whether it's an insert or update.
    ///</summary>
    saveCourse(golfclub: GolfClub, golfcourse: GolfCourse) {

        if (golfcourse.name === undefined) {
            return;
        }

        // Make sure the GolfCourses collection is initialized
        if (golfclub.golfCourses === undefined) {
            console.log('golfcourses is null');
            golfclub.golfCourses = [];
        }

        // Find the index for the selected golf course.
        const idx = golfclub.golfCourses.findIndex(function (obj) {
            return obj.name === golfcourse.name;
        });

        if (idx === -1) {
            // insert course
            golfclub.golfCourses.push(golfcourse);
        } else {
            // update course
            golfclub.golfCourses.splice(idx, 1, golfcourse);
        }

        // Update the golf club via the service.  This does an entire
        // document update.
        this._golfClubService.updateGolfClub(golfclub)
            .subscribe(gc => {
                this.isVisible = false;
                this.close.emit(false);

                this._toast.success('The golf course was saved successfully!', 'Save Golf Course');
            },
            error => this._toast.error('There was an error saving the Golf Course.'));
    }

    ///<author>
    /// KW - Cancel the manage course form.
    ///</author>
    ///<summary>
    /// This method closes the Course form when the Cancel button is clicked.
    ///</summary>
    cancelAddCourse(): void {
        const el = document.getElementById('golfCourseName');
        el.removeAttribute('required');

        this.isVisible = false;
        this.close.emit(false);
    }

}
