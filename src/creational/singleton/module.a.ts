import { MyDatabaseFunction } from './db/my-database.function';
import { myDatabaseFromModuleA } from './module.b';

MyDatabaseFunction.add({ name: 'Higor', age: 23 });
MyDatabaseFunction.add({ name: 'Maria', age: 22 });
MyDatabaseFunction.add({ name: 'João', age: 50 });
MyDatabaseFunction.remove(2);
MyDatabaseFunction.show();
console.log(MyDatabaseFunction === myDatabaseFromModuleA);
