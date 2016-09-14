namespace Coins {
    export abstract class Coin {
        value: number;
        constructor(value: number) {
            this.value = value;
        }
        abstract getImageUrl (): string;
        get Value(): number{
            return this.value;
        };
    }

    export class Quarter extends Coin {
        constructor() {
            super(.25);
        }
        getImageUrl (): string {
            return "img/Quarter.jpg";
        }
    }
    export class Dime extends Coin {
        constructor() {
            super(.10);
        }
        getImageUrl (): string {
            return "img/Dime.jpg";
        }
    }
    export class Half extends Coin {
        constructor() {
            super(.50);
        }
        getImageUrl (): string {
            return "img/Half.png";
        }
    }
    export class Dollar extends Coin {
        constructor() {
            super(1.0);
        }
        getImageUrl (): string {
            return "img/Dollar.jpg";
        }
    }
}