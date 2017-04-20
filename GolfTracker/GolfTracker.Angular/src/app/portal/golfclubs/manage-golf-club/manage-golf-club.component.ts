import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { GolfClub, GolfCourse } from 'app/shared/models/models';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { GolfclubService, TOASTR_TOKEN, IToastr } from 'app/shared/services';
import { PubSubService } from 'app/shared/services/pubsub/pubsub.service';

@Component({
  selector: 'gt-manage-golf-club',
  templateUrl: './manage-golf-club.component.html',
  styleUrls: ['./manage-golf-club.component.css']
})
export class ManageGolfClubComponent {
  pageTitle: string = 'Manage golfclub';

  @Input() model: GolfClub;
  @Input() dialogTitle: string;
  @Input() isVisible: boolean;
  @Output() close = new EventEmitter();

  errorMessage: string;

  manageGolfClubForm: FormGroup;

  constructor(private _golfClubService: GolfclubService,
    private _pubsub: PubSubService,
    @Inject(TOASTR_TOKEN) private _toast: IToastr) { }

  ///<author>
  /// KW - Edit Golf Club
  ///</author>
  ///<summary>
  /// This will handle either the Insert or Update function.
  ///</summary>
  saveGolfClub(golfClub: GolfClub): void {

    // quick validation
    if (golfClub.name === undefined) {
      this.errorMessage = 'Golf Club Name is required.';
      return;
    }

    // Since there's no Id on the incoming model, add.
    if (golfClub.id === undefined) {
      this._golfClubService.addGolfClub(golfClub)
        .subscribe(gc => {

          // Add the golf club to the PubSub subscription
          // Check portal/golfclubs/golfclubs.component.ts for consuming this subscription
          // in the ngOnInit() method.
          this._pubsub.AddGolfClub(gc);
          this.model = <GolfClub>{};

          this.isVisible = false;
          this.close.emit(false);

          this._toast.success('The Golf Club was saved successfully!');
        },
        error => this.errorMessage = error);
    } else {
      // Update the model
      this._golfClubService.updateGolfClub(golfClub)
        .subscribe(gc => {
          this.model = <GolfClub>{};

          this.isVisible = false;
          this.close.emit(false);

          this._toast.success('The Golf Club was saved successfully!');
        },
        error => this.errorMessage = error);
    }
  }

  ///<author>
  /// KW - Close the Golf Club
  ///</author>
  ///<summary>
  /// First remove the 'required' attribute to the input field so the validation doesn't fire
  /// when you hide the form.
  ///</summary>
  closeGolfClubForm(): void {
    const el = document.getElementById('name');
    el.removeAttribute('required');

    this.model = <GolfClub>{};
    this.isVisible = false;
    this.close.emit(false);
  }

}
