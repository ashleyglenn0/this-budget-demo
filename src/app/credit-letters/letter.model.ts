import { identifierModuleUrl } from "@angular/compiler";

export class CreditLetters {
  public id: number;
  public name: string;
  public description: string;
  public companyName: string;
  public companyPhone: string;
  public type: string;
  public dateSent: string;
  public dateReceived: string;
  public letterSummary: string;

  constructor(name: string, description: string, companyName: string, companyPhone: string, type: string, dateSent: string, dateReceived: string, letterSummary:string){
    this.id = Date.now();
    this.name = name;
    this.description = description;
    this.companyName = companyName;
    this.companyPhone = companyPhone;
    this.type = type;
    this.dateSent = dateSent;
    this.dateReceived = dateReceived;
    this.letterSummary = letterSummary;
  }
}
