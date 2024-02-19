import { MainDishBuilder } from '../../creational/builder/classes/builder/main-dish.builder';
import { VeganDishBuilder } from '../../creational/builder/classes/builder/vegan-dish.builder';

export class BuilderFacade {
  // Essa é a fachada para a pasta src/creational/builder/index.ts

  private mainDishBuilder = new MainDishBuilder();
  private veganDishBuilder = new VeganDishBuilder();

  makeMeal1() {
    this.mainDishBuilder.makeMeal();
    console.log(this.mainDishBuilder.getMeal());
    console.log(this.mainDishBuilder.getPrice());
  }

  makeMeal2() {
    this.mainDishBuilder.reset();
    console.log(this.mainDishBuilder.makeBevarege().getMeal());
  }

  makeMeal3() {
    this.veganDishBuilder.makeMeal();
    console.log(this.veganDishBuilder.getMeal());
    console.log(this.veganDishBuilder.getPrice());
  }
}
