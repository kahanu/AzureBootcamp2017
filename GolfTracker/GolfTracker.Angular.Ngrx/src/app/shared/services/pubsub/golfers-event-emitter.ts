import { Subject } from 'rxjs/Subject';
import { Golfer } from 'app/shared/models/models';

export class GolfersEventEmitter extends Subject<Golfer> {
    constructor() {
        super();
    }
    emit(value) { super.next(value); }
}
