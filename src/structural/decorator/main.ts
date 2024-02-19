import { ProductCustomizedDecorator } from './product/product-customized-decorator';
import { ProductStampedDecorator } from './product/product-stamped-decorator';
import { IProduct } from './product/product.interface';
import { TShirt } from './product/t-shit';

function run(product: IProduct) {
  console.log('________________');
  console.log(product.getName());
  console.log(product.getPrice());
}

const tshirt = new TShirt();
const stampedTshirt = new ProductStampedDecorator(tshirt);
const stampedAndCustomizedTshirt = new ProductCustomizedDecorator(
  stampedTshirt,
);

run(tshirt);
run(stampedTshirt);
run(stampedAndCustomizedTshirt);
