var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Animal = (function () {
    function Animal(theName) {
        this.nameOfAnimal = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        alert('direct call');
        console.log(this.nameOfAnimal + " moved " + distanceInMeters + "m");
    };
    return Animal;
}());
var Mouse = (function (_super) {
    __extends(Mouse, _super);
    function Mouse(name) {
        _super.call(this, name);
    }
    Mouse.prototype.move = function (distInMeters) {
        if (distInMeters === void 0) { distInMeters = 5; }
        console.log('Mouse...');
        _super.prototype.move.call(this, distInMeters);
    };
    return Mouse;
}(Animal));
var Cat = (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        _super.call(this, name);
    }
    Cat.prototype.move = function (distInMeters) {
        if (distInMeters === void 0) { distInMeters = 45; }
        alert('cat');
        console.log('Cat...');
        _super.prototype.move.call(this, distInMeters);
    };
    return Cat;
}(Animal));
var Jerry = new Mouse('Jerry the mice');
var Tom = new Cat('Tom the Cat');
Jerry.move();
Tom.move();
