import { Component, OnInit, EventEmitter, Input, Output, Inject } from '@angular/core';
import { Golfer } from 'app/shared/models/models';
import { GolferService, PubSubService, TOASTR_TOKEN, IToastr } from 'app/shared/services';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'gt-manage-golfer',
    templateUrl: './manage-golfer.component.html',
    styleUrls: ['./manage-golfer.component.css']
})
export class ManageGolferComponent {

    pageTitle: string = 'Manage golfer';

    @Input() golfer: Golfer;
    @Input() dialogTitle: string = 'Add';
    @Input() isVisible: boolean;
    @Output() close = new EventEmitter();
    golfers: Golfer[];

    constructor(private _golferService: GolferService,
        private _pubsub: PubSubService,
        private _toast: ToastrService) { }

    ///<author>
    /// KW - saveGolfer
    ///</author>
    ///<summary>
    /// Save or update the golfer.
    ///</summary>
    saveGolfer(isValid: boolean, golfer: Golfer): void {

        if (golfer.id === undefined) {
            golfer.rounds = [];
            this._golferService.addGolfer(golfer)
                .subscribe(data => {

                    // I'm using a pubsub service to publish the golfer to the service
                    // and allow anyone listening to subscribe to the pubsub service
                    // and collect this golfer.  This is an easy way to update the
                    // golfers[] collection in the ManageGolfersComponent without
                    // having direct access to it's - this.golfers = [] array.
                    this._pubsub.AddGolfer(data);
                    this.golfer = <Golfer>{};
                    this._toast.success('The Golfer was saved successfully!', 'Save Golfer');
                },
                error => this._toast.error('There was an error saving the golfer.'));
        } else {
            // Updating golfer
            this._golferService.updateGolfer(golfer)
                .subscribe(data => {
                    this.golfer = data;
                    this._toast.success('The Golfer was updated successfully!', 'Update Golfer');
                },
                error => this._toast.error('There was an error updating the golfer.'));
        }

        this.isVisible = false;
        this.close.emit(false);
    }

    ///<author>
    /// KW - cancelGolferForm
    ///</author>
    ///<summary>
    /// Close the golfer form.
    ///</summary>
    cancelGolferForm(): void {
        this.isVisible = false;
        this.close.emit(false);
    }

}
