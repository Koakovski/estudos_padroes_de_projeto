import { BaseBudgetHandler } from './base-budget-handler';
import { CustomerBudget } from './customer-budget';

export class DirectorBudgetHandler extends BaseBudgetHandler {
  handle(budget: CustomerBudget): CustomerBudget {
    if (budget.total <= 50_000) {
      console.log('O Diretor tratou o orçamento de ' + budget.total);
      budget.approved = true;
      return budget;
    }

    return super.handle(budget);
  }
}
