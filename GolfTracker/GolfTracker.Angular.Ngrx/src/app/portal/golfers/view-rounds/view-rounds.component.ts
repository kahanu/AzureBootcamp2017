import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Golfer } from 'app/shared/models/models';
import { GolferService } from 'app/shared/services';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'gt-view-rounds',
  templateUrl: './view-rounds.component.html',
  styleUrls: ['./view-rounds.component.css']
})
export class ViewRoundsComponent {

  pageTitle: string = 'View rounds';
  @Input() golfer: Golfer;

  ///<author>
  /// KW - isVisible
  ///</author>
  ///<summary>
  /// We are allowing the host component to control the visibility of the view rounds panel
  /// in the event that the view rounds panel is visible and the user then clicks the
  /// Add Round button.  If the visibility of the view rounds panel wasn't controlled by
  /// the host component (ManageGolfersComponent), then both panels would be visible at
  /// the same time, and that's not desirable or a good user experience.
  ///</summary>
  @Input() isVisible: boolean;

  ///<author>
  /// KW - close output (EventEmitter)
  ///</author>
  ///<summary>
  /// This will be an event on the HTML directive in the manage-golfers.component.html for the view-rounds directive.
  /// It allows the host component to be signaled when the ViewRounds div closes, so the host component can
  /// set the shortTable variable.
  ///</summary>
  @Output() close = new EventEmitter();

  constructor(private _golferService: GolferService,
    private _toast: ToastrService) { }

  deleteRound(idx: number): void {
    if (confirm('Are you sure you want to delete this round?')) {
      this.golfer.rounds.splice(idx, 1);
      this._golferService.updateGolfer(this.golfer)
        .subscribe(g => {
          this._toast.success('The Round was deleted successfully!', 'Delete Round');
        },
        error => this._toast.error('There was an error deleting the round.'));
    }
  }

  closeRoundsPanel(): void {
    // This will emit a boolean value to the event handler in the HTML directive of the host HTML
    // for the close event.  The actual value is irrelevant in this instance, since the host
    // event handler should always do what it needs to do, and in this case set the
    // shortTable variable to false;
    this.close.emit(false);
    this.isVisible = false;
  }
}
