import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('Barrack Obama', 'always wake up early', 'Barrack Obama', new Date(2021, 1, 2)),
    new Quote('Samphan Douglas', 'be hardworking', 'Samphan Douglas', new Date(2021, 1, 2))
  ];
  addNewQuote(quote: any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.unshift(quote);

  }
  toggleDetails(index: any) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  index: any
  upVote(index: any) {
    this.quotes[index].upvote += 1
  }
  downVote(index: any) {
    this.quotes[index].downvote += 1;
  }
  startNum?: number;
  lastNum?: number;
  ctr?: number;

  hUpvote() {
    this.startNum = 0;
    this.lastNum = 0;

    for (this.ctr = 0; this.ctr < this.quotes.length; this.ctr++) {
      this.lastNum = this.quotes[this.ctr].upvote;
      if (this.lastNum > this.startNum) {
        this.startNum = this.lastNum;
      }
    }

    return this.startNum;
  }

  quoteWritten(isWritten: any, index: number) {
    if (isWritten) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`);

      if (toDelete === true) {
        if (isWritten) {
          this.quotes.splice(index, 1);
        }
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
