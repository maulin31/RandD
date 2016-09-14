abstract class Coin {
    value: number;
    constructor(value: number) {
        this.value = value;
    }
    abstract getImageUrl (): string;
    get Value(): number{
        return this.value;
    };
}

class Quarter extends Coin {
    constructor() {
        super(.25);
    }
    getImageUrl (): string {
        return "img/Quarter.jpg";
    }
}
class Dime extends Coin {
     constructor() {
        super(.10);
    }
    getImageUrl (): string {
        return "img/Dime.jpg";
    }
}
class Half extends Coin {
     constructor() {
        super(.50);
    }
    getImageUrl (): string {
        return "img/Half.png";
    }
}
class Dollar extends Coin {
     constructor() {
        super(1.0);
    }
    getImageUrl (): string {
        return "img/Dollar.jpg";
    }
}