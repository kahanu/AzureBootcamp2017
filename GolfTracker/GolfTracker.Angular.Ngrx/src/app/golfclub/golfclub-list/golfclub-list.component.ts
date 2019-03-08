import { Component, OnInit, Inject } from '@angular/core';
import { GolfClub } from 'app/shared/models/models';
import { GolfclubService } from 'app/shared/services';

@Component({
    selector: 'gt-golfclub-list',
    templateUrl: './golfclub-list.component.html',
    styleUrls: ['./golfclub-list.component.css']
})
export class GolfclubListComponent implements OnInit {
    pageTitle = 'Golf Clubs';
    golfclubs: GolfClub[];
    golfclub: GolfClub;

    shortTable = false;
    dialogTitle: string;
    errorMessage: string;

    golfCoursesTableIsVisible = false;
    showLoading = true;

    constructor(private _golfClubService: GolfclubService) { }

    ngOnInit() {
        this.getGolfClubs();
    }

    ///<author>
    /// KW - Get Golf Clubs methods
    ///</author>
    ///<summary>
    /// This method retrieves a collection of golf clubs from the service.
    ///</summary>
    getGolfClubs() {
        this.golfclubs = [];
        this._golfClubService.getGolfClubs()
            .subscribe(golfclubs => {
                this.showLoading = false;
                this.golfclubs = golfclubs;
            });
    }

    /**********************************************************************************************
    Begin Golf Course Methods
    **********************************************************************************************/

    ///<author>
    /// KW - Show Golf Courses Table
    ///</author>
    ///<summary>
    /// This will display the golf courses panel for the selected golf club.
    ///</summary>
    showGolfCoursesTable(golfClub: GolfClub): void {
        this.hideAllForms();
        this.golfclub = golfClub;

        this.shortTable = true;
        this.golfCoursesTableIsVisible = true;
    }


    ///<author>
    /// KW - onGolfCoursesPanelClose
    ///</author>
    ///<summary>
    /// This is the close event handler on the GolfCoursesForGolfClubComponent directive.
    ///</summary>
    onGolfCoursesPanelClose(): void {
        this.hideAllForms();
        this.shortTable = false;
    }


    /**********************************************************************************************
    End Golf Course Methods
    **********************************************************************************************/


    ///<author>
    /// KW - Hide all forms.
    ///</author>
    ///<summary>
    /// This is an easy way to hide all froms is needed.
    ///</summary>
    hideAllForms(): void {
        this.golfCoursesTableIsVisible = false;
    }
}
