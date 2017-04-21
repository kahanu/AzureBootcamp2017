import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Golfer, Round, GolfClub, GolfCourse, Tee } from 'app/shared/models/models';
import { GolfclubService, GolferService, TOASTR_TOKEN, IToastr } from 'app/shared/services';
import { HandicapCalculatorService } from 'app/portal/golfers/handicap-calculator.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'gt-add-round',
  templateUrl: './add-round.component.html',
  styleUrls: ['./add-round.component.css']
})
export class AddRoundComponent implements OnInit {
  pageTitle: string = 'Add round';

  @Input() golfer: Golfer;
  @Input() round: Round;
  @Input() isVisible: boolean;
  @Output() close = new EventEmitter();
  golfclubs: GolfClub[] = [];
  golfCourses: GolfCourse[] = [];
  tees: Tee[] = [];

  constructor(
    private _golfClubService: GolfclubService,
    private _golferService: GolferService,
    private _handicapCalculatorService: HandicapCalculatorService,
    private _toast: ToastrService
  ) { }

  ngOnInit(): void {
    // Populate the Golf Club drop down
    this._golfClubService.getGolfClubs()
      .subscribe(gc => this.golfclubs = gc);
  }

  ///<author>
  /// KW - submitRoundForm
  ///</author>
  ///<summary>
  /// Add the round of golf for the selected golfer.
  ///</summary>
  submitRoundForm(isValid: Boolean, round: Round) {
    if (!isValid) {
      return;
    }

    if (this.golfer.rounds === undefined || this.golfer.rounds === null) {
      this.golfer.rounds = [];
    }

    // Set local variables for calculations
    const grossScore = round.score;
    const hdcpIndex = this._handicapCalculatorService.fixHandicapIndex(this.golfer.handicap, this.golfer.isPlus);
    const tee = this.tees.filter((item) => item.teeName === round.golfCourse.teePlayed.teeName)[0];
    const slope = tee.slope;

    round.golfCourse.teePlayed.teeName = tee.teeName;
    round.golfCourse.teePlayed.gender = tee.gender;
    round.golfCourse.teePlayed.length = tee.length;
    round.golfCourse.teePlayed.par = tee.par;
    round.golfCourse.teePlayed.rating = tee.rating;
    round.golfCourse.teePlayed.slope = tee.slope;

    // Calculate the net score
    const netScore = this._handicapCalculatorService.calculateNetScore(grossScore, hdcpIndex, slope);

    if (netScore <= (tee.par - 5)) {
      this._toast.warning('(Cough) SANDBAGGER!');
    }

    // Update the round with the calculated net score.
    round.netScore = netScore;

    // Add the round to the rounds array for the golfer.
    this.golfer.rounds.push(round);

    // Update the golfer
    this._golferService.updateGolfer(this.golfer)
      .subscribe(g => {
        this.close.emit(false);
        this.isVisible = false;
        this._toast.success('The score was saved successfully!', 'Add Round');
      },
      error => this._toast.error('There was an error saving the round.'));
  }

  ///<author>
  /// KW - getgolfCourses
  ///</author>
  ///<summary>
  /// Start the cascading drop downs for clubs, courses and tees.
  ///</summary>
  getGolfCourses(name: string): void {
    const club = this.golfclubs.filter((item) => item.name === name)[0];
    this.golfCourses = club.golfCourses;
  }

  ///<author>
  /// KW - getTees
  ///</author>
  ///<summary>
  /// Populate the Tees drop down when the courses drop down item is selected.
  ///</summary>
  getTees(name: string): void {
    const golfCourses = this.golfCourses.filter((item) => item.name === name)[0];
    this.tees = golfCourses.tees;
  }

  ///<author>
  /// KW - cancelRoundForm
  ///</author>
  ///<summary>
  /// Close the round entry form.
  ///</summary>
  cancelRoundForm(): void {
    this.close.emit(false);
    this.isVisible = false;
  }

}
