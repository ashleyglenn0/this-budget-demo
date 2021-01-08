export class BudgetItem {
  public companyName: string;
  public companyPhone: string;
  public type: string;
  public amount: number;
  public date: string;

  constructor(companyName: string, companyPhone: string, type: string, amount: number, date: string){
    this.companyName = companyName;
    this.companyPhone = companyPhone;
    this.type = type;
    this.amount = amount;
    this.date = date;
  }
}
