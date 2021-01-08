export class CreditLetters {
  public name: string;
  public description: string;
  public letterItems: [];

  constructor(name: string, description: string, letterItems: []){
    this.name = name;
    this.description = description;
    this.letterItems = [];
  }
}
