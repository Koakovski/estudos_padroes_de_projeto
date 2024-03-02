import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItems('A', 'B', 'C', 'D', 'E', 'F');

const [a, b] = dataStructure;

console.log('ROUBADOS', a, b);
console.log();
for (const data of dataStructure) {
  console.log(data);
}

console.log();
dataStructure.changeIterator(new MyReverseIterator(dataStructure));
for (const data of dataStructure) {
  console.log(data);
}
