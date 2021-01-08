export class LetterItem {
  public companyName: string;
  public companyPhone: number;
  public type: string;
  public dateSent: string;
  public dateReceived: string;
  public letterSummary: string;

  constructor(companyName: string, companyPhone: number, type: string, dateSent: string, dateReceived: string, letterSummary: string){
    this.companyName = companyName;
    this.companyPhone = companyPhone;
    this.type = type;
    this.dateSent = dateSent;
    this.dateReceived = dateReceived;
    this.letterSummary = letterSummary;
  }
}
