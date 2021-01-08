export class Budget {
    public name: string;
    public description: string;
    public budgetItems: [];

  constructor(name: string, description: string, budgetItems: [string]){
      this.name = name;
      this.description = description;
      this.budgetItems = [];
    }
}
