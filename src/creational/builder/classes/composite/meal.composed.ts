import { IMealComposite } from '../../interfaces/meal.composite.interface';

export class MealBox implements IMealComposite {
  private readonly _meals: IMealComposite[] = [];

  getName(): string {
    return (
      this._meals
        .reduce((name, meal) => (name += meal.getName() + ', '), 'Meals: ')
        .slice(0, -2) + '.'
    );
  }

  getPrice(): number {
    return this._meals.reduce((sum, meal) => (sum += meal.getPrice()), 0);
  }

  addMeal(...meal: IMealComposite[]) {
    meal.forEach((meal) => {
      this._meals.push(meal);
    });
  }
}
