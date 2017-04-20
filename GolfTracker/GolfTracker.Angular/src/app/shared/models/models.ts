
/**
 * GolfClub models
 */
export class GolfClub {
    constructor(public id: string,
    public name: string,
    public location: string,
    public golfCourses?: GolfCourse[]) {}
}

export class GolfCourse {
    constructor(public id: string,
    public name: string,
    public tees?: Tee[]) {}
}

export class Tee {
    constructor(public id: string,
    public teeName: string,
    public gender: string,
    public length: number,
    public slope: number,
    public rating: number,
    public par: number) {}
}


/**
 * Golfer models
 */
export class TeePlayed {
    constructor(public id: string,
    public teeName: string,
    public gender: string,
    public length: number,
    public slope: number,
    public rating: number,
    public par: number) {}
}

export class GolfCoursePlayed {
    constructor(public id: string,
    public golfClubName: string,
    public golfCourseName: string,
    public teePlayed: TeePlayed) {}
}

export class Round {
    constructor(public id: string,
    public score: number,
    public netScore: number,
    public datePlayed: Date,
    public golfCourse: GolfCoursePlayed,
    public scoreClass?: string,
    public netScoreClass?: string) {}
}

export class Golfer {
    constructor(public id: string,
    public name: string,
    public handicap: number,
    public isPlus: boolean,
    public rounds: Round[],
    public userName: string, ) {}
}
