import { Component, OnInit, Input, Optional } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  readonly sizeTwoColumns: string = "col-xs-2 col-sm-2 col-md-2 col-lg-2";
  readonly sizeThreeColumns: string = "col-xs-3 col-sm-3 col-md-3 col-lg-3";
  readonly sizeFourColumns: string = "col-xs-4 col-sm-4 col-md-4 col-lg-4";
  readonly sizeSixColumns: string = "col-xs-6 col-sm-6 col-md-6 col-lg-6";
  readonly sizeTwelveColumns: string = "col-xs-12 col-sm-12 col-md-12 col-lg-12";
  columnLayout: string;

  @Input() cardDeck: Card[];

  constructor(@Optional() cardDeck: Card[]) {
    this.cardDeck = cardDeck;
  }

  ngOnInit() {
    this.determineColumnLayout()
  }

  determineColumnLayout() {
    switch (this.cardDeck.length) {
      case 1: {
        this.columnLayout = this.sizeTwelveColumns;
        break;
      }
      case 2: {
        this.columnLayout = this.sizeSixColumns;
        break;
      }
      case 3: {
        this.columnLayout = this.sizeFourColumns;
        break;
      }
      case 4: {
        this.columnLayout = this.sizeThreeColumns;
        break;
      }
      case 6: {
        this.columnLayout = this.sizeTwoColumns;
        break;
      }
      default: {
        console.log("Invalid Card Deck Size");
        break;
      }
    }
  }

}
