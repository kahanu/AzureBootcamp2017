import { Subject } from 'rxjs/Subject';
import { GolfClub } from 'app/shared/models/models';

export class GolfClubEventEmitter extends Subject<GolfClub> {
    constructor() {
        super();
    }

    emit(value) { super.next(value); }
}
