import { MyDatabaseFunction } from './db/my-database.function';

MyDatabaseFunction.add({ name: 'Marcos', age: 23 });
MyDatabaseFunction.add({ name: 'Pedro', age: 22 });
MyDatabaseFunction.add({ name: 'Vitor', age: 20 });

export { MyDatabaseFunction as myDatabaseFromModuleA };
