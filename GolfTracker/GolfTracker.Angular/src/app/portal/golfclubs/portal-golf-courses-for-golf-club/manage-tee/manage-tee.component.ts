import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GolfClub, GolfCourse, Tee } from 'app/shared/models/models';
import { GolfclubService } from 'app/shared/services';

@Component({
  selector: 'gt-manage-tee',
  templateUrl: './manage-tee.component.html',
  styleUrls: ['./manage-tee.component.css']
})
export class ManageTeeComponent  {
pageTitle: string = 'Manage tee';

    @Input() golfclub: GolfClub;
    @Input() golfcourse: GolfCourse;
    @Input() tee: Tee;
    @Input() isVisible: boolean;
    @Input() dialogTitle: string;
    @Output() close = new EventEmitter();

    constructor(private _golfClubService: GolfclubService,
      private _toast: ToastrService) {}


    ///<author>
    /// KW - Save the Tee
    ///</author>
    ///<summary>
    /// This method either inserts or updates the selected tee for the golf course.
    ///</summary>
    saveTee(isValid, golfclub: GolfClub, golfcourse: GolfCourse, tee: Tee) {
        if (!isValid) {
            console.log('not valid');
            return;
        }

        let idx = -1;
        if (!golfcourse.tees) {
            golfcourse.tees = [];
        }

        idx = golfcourse.tees.findIndex(function (obj) {
            return obj.teeName === tee.teeName;
        });

        if (idx === -1) {
            // insert
            golfcourse.tees.push(tee);
        } else {
            // update
            golfcourse.tees.splice(idx, 1, tee);
        }

        this._golfClubService.updateGolfClub(golfclub)
            .subscribe(gc => {
                this.close.emit(false);
                this._toast.success('The Tee was saved successfully!', 'Save Tee');
            },
            error => this._toast.error('There was an error saving the Tee.'));
    }

    ///<author>
    /// KW - Close the Tee form.
    ///</author>
    ///<summary>
    /// This method hides the tee form when the Cancel button is clicked.
    ///</summary>
    cancelTeeForm(): void {
        this.close.emit(false);
    }

}
