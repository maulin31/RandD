class Animal {
    nameOfAnimal: string;
    constructor(theName: string) { this.nameOfAnimal = theName; }
    move(distanceInMeters: number) {
        console.log(`${this.nameOfAnimal} moved ${distanceInMeters}m`);
    }
}

class Mouse extends Animal {
    constructor(name: string) { super(name); }
    move(distInMeters = 5) {
        console.log('Mouse...');
        super.move(distInMeters);
    }
}

class Cat extends Animal {
    constructor(name: string) { super(name); }
    move(distInMeters = 45) {
        console.log('Cat...');
        super.move(distInMeters);
    }
}

let Jerry = new Mouse('Jerry the mice');
let Tom: Animal = new Cat('Tom the Cat');

Jerry.move();
Tom.move(35);
