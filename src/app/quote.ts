export class Quote {
  showDescription: boolean;
  constructor(public name: string,public quote: string,public vote: string){
    this.showDescription=false;
  }
}