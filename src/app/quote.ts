export class Quote {
  public upvote=0;
  public downvote=0;

  showDescription?: boolean;
  constructor(
    public name: string,
    public quote: string,
    public author:string,
    public date: Date = new Date()
    ){
    this.showDescription=false;
  }
}