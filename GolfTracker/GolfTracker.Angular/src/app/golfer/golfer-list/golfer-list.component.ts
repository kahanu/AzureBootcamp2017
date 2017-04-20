import { Component, OnInit } from '@angular/core';
import { Golfer, Round } from 'app/shared/models/models';
import { GolferService } from 'app/shared/services';

@Component({
    selector: 'gt-golfer-list',
    templateUrl: './golfer-list.component.html',
    styleUrls: ['./golfer-list.component.css']
})
export class GolferListComponent implements OnInit {

    pageTitle: string = 'Golfer List';
    isAuthenticated: boolean = false;

    golfers: Golfer[];
    golfer: Golfer;
    rounds: Round[];
    showRounds: boolean = false;
    showLoading: boolean = true;

    constructor(private _golferService: GolferService) { }

    ///<author>
    /// KW - GetGolfers
    ///</author>
    ///<summary>
    /// Load data into the page on load.
    ///</summary>
    ngOnInit() {
        this.getGolfers();
    }

    ///<author>
    /// KW - Get the list of golfers
    ///</author>
    ///<summary>
    /// This returns a list of golfers.
    ///</summary>
    getGolfers() {
        this.golfers = [];
        this._golferService.getGolfers()
            .subscribe(golfers => {

                golfers.forEach(g => {

                    g.rounds.forEach(round => {
                        // See if the gross score is under par and apply a style
                        if (round.score >= round.golfCourse.teePlayed.par) {
                            round.scoreClass = 'score';
                        } else {
                            round.scoreClass = 'underpar';
                        }

                        // See if the net score is under par and apply a style
                        if (round.netScore >= round.golfCourse.teePlayed.par) {
                            round.netScoreClass = 'score';
                        } else {
                            round.netScoreClass = 'underpar';
                        }
                    });
                });
                this.showLoading = false;
                this.golfers = golfers;
            });
    }



    ///<author>
    /// KW - clickShowRounds
    ///</author>
    ///<summary>
    /// Show the rounds for the selected golfer, for the unauthenticated user.
    /// idx: number
    ///</summary>
    clickShowRounds(g: Golfer): void {
        const player = g;

        this.golfer = player;
        this.rounds = player.rounds;
        this.showRounds = true;
    }
}
