import { IMealBuilder } from '../../interfaces/meal.builder.interface';
import { Beans, Beverage, Dessert, Meat, Rice } from '../composite/meal';
import { MealBox } from '../composite/meal.composed';

export class MainDishBuilder implements IMealBuilder {
  private _mealBox: MealBox = new MealBox();

  reset(): this {
    this._mealBox = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    const meat = new Meat('Carne', 20);
    this._mealBox.addMeal(rice, beans, meat);

    return this;
  }

  makeBevarege(): this {
    const beverage = new Beverage('Suco', 5);
    this._mealBox.addMeal(beverage);

    return this;
  }

  makeDessert(): this {
    const dessert = new Dessert('Pudim', 10);
    this._mealBox.addMeal(dessert);

    return this;
  }

  getMeal(): MealBox {
    return this._mealBox;
  }

  getPrice(): number {
    return this._mealBox.getPrice();
  }
}
