import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quote[] = [
    new Quote('Barrack Obama','always wake up early','yes'),
    new Quote('Samphan Douglas','be hardworking','no')
  ];
  addNewQuote(quote:any){
    let quoteLength= this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.unshift(quote);

  }
  
 

  constructor() { }

  ngOnInit(): void {
  }

}
