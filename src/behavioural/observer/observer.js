// Concrete Observable
var InputObservable = /** @class */ (function () {
    function InputObservable(element) {
        this.element = element;
        this.observers = [];
    }
    InputObservable.prototype.subscribe = function () {
        var _this = this;
        var observers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observers[_i] = arguments[_i];
        }
        observers.forEach(function (observer) { return _this.observers.push(observer); });
    };
    InputObservable.prototype.unsubcribe = function (observer) {
        var observerIndex = this.observers.findIndex(function (o) { return o === observer; });
        if (observerIndex !== -1) {
            this.observers = this.observers.splice(observerIndex, 1);
        }
    };
    InputObservable.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (observer) { return observer.update(_this); });
    };
    return InputObservable;
}());
// Concrete Observer
var ParagraphObserver = /** @class */ (function () {
    function ParagraphObserver(element) {
        this.element = element;
    }
    ParagraphObserver.prototype.update = function (observable) {
        this.element.innerText = observable.element.value;
    };
    return ParagraphObserver;
}());
// Client Code
function makeInput() {
    var input = document.createElement('input');
    document.body.appendChild(input);
    return input;
}
function makeParagraph() {
    var paragraph = document.createElement('p');
    document.body.appendChild(paragraph);
    return paragraph;
}
var input = new InputObservable(makeInput());
var p1 = new ParagraphObserver(makeParagraph());
var p2 = new ParagraphObserver(makeParagraph());
input.subscribe(p1, p2);
input.element.addEventListener('keyup', function () {
    input.notify();
});
