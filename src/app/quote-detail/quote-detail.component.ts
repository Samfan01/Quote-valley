import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote?:Quote;
  
  // quotes:any;
  

  @Output() isWritten = new EventEmitter<boolean>();

  quoteWritten(written:boolean){
    this.isWritten.emit(written);
  }
  
  
 
  
  constructor() { }

  ngOnInit(): void {
  }

}
