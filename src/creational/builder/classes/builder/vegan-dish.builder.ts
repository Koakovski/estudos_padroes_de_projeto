import { IMealBuilder } from '../../interfaces/meal.builder.interface';
import { Beans, Rice } from '../composite/meal';
import { MealBox } from '../composite/meal.composed';

export class VeganDishBuilder implements IMealBuilder {
  private _mealBox: MealBox = new MealBox();

  reset(): this {
    this._mealBox = new MealBox();
    return this;
  }

  makeMeal(): this {
    const rice = new Rice('Arroz', 5);
    const beans = new Beans('Feijão', 10);
    this._mealBox.addMeal(rice, beans);

    return this;
  }

  getMeal(): MealBox {
    return this._mealBox;
  }

  getPrice(): number {
    return this._mealBox.getPrice();
  }
}
