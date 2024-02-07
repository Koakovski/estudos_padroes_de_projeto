export abstract class ProductComponent {
  abstract getPrice(): number;
  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  getPrice(): number {
    return this.children.reduce((acc, curr) => acc + curr.getPrice(), 0);
  }

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const index = this.children.indexOf(product);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }
}
// Client Code

// office box
const officeBox = new ProductComposite();
const pen = new ProductLeaf('Caneta', 2);
const pencil = new ProductLeaf('Lápis', 1);
const notebook = new ProductLeaf('Carderno de Notas', 50);

officeBox.add(pen, pencil);
console.log(officeBox, officeBox.getPrice());
officeBox.add(notebook);
console.log(officeBox, officeBox.getPrice());
officeBox.remove(pen);
console.log(officeBox, officeBox.getPrice());

// gadget box
const gadgetsBox = new ProductComposite();
const tablet = new ProductLeaf('Tablet', 2000);
const kindle = new ProductLeaf('Kindle', 300);

gadgetsBox.add(tablet, kindle);
console.log(gadgetsBox, gadgetsBox.getPrice());

// to buy box
const toBuyBox = new ProductComposite();
toBuyBox.add(officeBox, gadgetsBox);
console.log(toBuyBox, toBuyBox.getPrice());
