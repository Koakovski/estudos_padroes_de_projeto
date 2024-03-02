interface Observer {
  update(observable: Observable): void;
}

interface Observable {
  subscribe(...observers: Observer[]): void;
  unsubcribe(observer: Observer): void;
  notify(): void;
}

// Concrete Observable
class InputObservable implements Observable {
  private observers: Observer[] = [];

  constructor(public element: HTMLInputElement) {}

  subscribe(...observers: Observer[]): void {
    observers.forEach((observer) => this.observers.push(observer));
  }

  unsubcribe(observer: Observer): void {
    const observerIndex = this.observers.findIndex((o) => o === observer);
    if (observerIndex !== -1) {
      this.observers = this.observers.splice(observerIndex, 1);
    }
  }

  notify(): void {
    this.observers.forEach((observer) => observer.update(this));
  }
}

// Concrete Observer
class ParagraphObserver implements Observer {
  constructor(public element: HTMLParagraphElement) {}

  update(observable: InputObservable): void {
    this.element.innerText = observable.element.value;
  }
}

// Client Code
function makeInput(): HTMLInputElement {
  const input = document.createElement('input');
  document.body.appendChild(input);
  return input;
}

function makeParagraph(): HTMLParagraphElement {
  const paragraph = document.createElement('p');
  document.body.appendChild(paragraph);
  return paragraph;
}

const input = new InputObservable(makeInput());
const p1 = new ParagraphObserver(makeParagraph());
const p2 = new ParagraphObserver(makeParagraph());

input.subscribe(p1, p2);

input.element.addEventListener('keyup', () => {
  input.notify();
});
