import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GolfClub } from 'app/shared/models/models';
import { GolfclubService } from 'app/shared/services';

@Component({
  selector: 'gt-golf-courses-for-golf-club',
  templateUrl: './golf-courses-for-golf-club.component.html',
  styleUrls: ['./golf-courses-for-golf-club.component.css']
})
export class GolfCoursesForGolfClubComponent {
pageTitle = 'Golf Courses For Golf Club';

    ///<author>
    /// KW - golfClub Input
    ///</author>
    ///<summary>
    /// This is the directive input property where you can pass in the
    /// selected 'golfclub' to the reusable component.
    ///</summary>
    @Input() golfclub: GolfClub;

    ///<author>
    /// KW - isVisible Input
    ///</author>
    ///<summary>
    /// This is the directive input property to pass in a boolean value
    /// to show or hide the panel.
    ///</summary>
    @Input() isVisible: boolean;

    ///<author>
    /// KW - close Event
    ///</author>
    ///<summary>
    /// This is the close event on the directive, when the host HTML can pass in
    /// a local method to call when the 'close' event is called.
    ///</summary>
    @Output() close = new EventEmitter();

    dialogTitle: string;
    teeFormIsVisible: boolean;

    constructor(private _golfClubService: GolfclubService) { }


    /**********************************************************************************************
    Begin Course Methods
    **********************************************************************************************/

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

    /**********************************************************************************************
    End Course Methods
    **********************************************************************************************/



}
