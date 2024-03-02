import { CeoBudgetHandler } from './ceo-buget-handler';
import { CustomerBudget } from './customer-budget';
import { DirectorBudgetHandler } from './director-buget-handler';
import { ManagerBudgetHandler } from './manager-buget-handler';
import { SellerBudgetHandler } from './seller-buget-handler';

function handleBudget(budget: number) {
  const customerBudget = new CustomerBudget(budget);

  const seller = new SellerBudgetHandler();
  const manager = new ManagerBudgetHandler();
  const director = new DirectorBudgetHandler();
  const ceo = new CeoBudgetHandler();

  seller.setNextHandler(manager);
  manager.setNextHandler(director);
  director.setNextHandler(ceo);

  seller.handle(customerBudget);
}

handleBudget(10);
handleBudget(11_00);
handleBudget(6_000);
handleBudget(80_000);
