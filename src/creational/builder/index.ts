/* 
// COMPOSITE
import { Beans, Meat, Rice } from './classes/composite/meal';
import { MealBox } from './classes/composite/meal.composed';

const rice = new Rice('Arroz', 5);
const beans = new Beans('Feijão', 10);
const meat = new Meat('Carne', 20);

const mealBox = new MealBox();
mealBox.addMeal(rice, beans, meat);
*/

// BUILDER
import { MainDishBuilder } from './classes/builder/main-dish.builder';
import { VeganDishBuilder } from './classes/builder/vegan-dish.builder';

console.log('mealBox');
const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal();
console.log(mainDishBuilder.getPrice());
mainDishBuilder.makeBevarege().makeDessert();
const mealBox = mainDishBuilder.getMeal();

console.log(mealBox.getName());
console.log(mealBox.getPrice());

console.log(mainDishBuilder.reset().getMeal().getPrice());

const veganDishBuilder = new VeganDishBuilder();
const veganMealBox = veganDishBuilder.makeMeal().getMeal();

console.log('veganMealBox');
console.log(veganMealBox.getName());
console.log(veganMealBox.getPrice());
