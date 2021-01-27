export class BudgetItem {
  public id: number;
  public companyName: string;
  public companyPhone: string;
  public type: string;
  public amount: number;
  public date: string;
  public notes: string;

  constructor(companyName: string, companyPhone: string, type: string, amount: number, date: string, notes: string){
    this.id = Date.now();
    this.companyName = companyName;
    this.companyPhone = companyPhone;
    this.type = type;
    this.amount = amount;
    this.date = date;
    this.notes = notes;
  }
}
