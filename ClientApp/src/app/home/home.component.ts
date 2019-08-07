import { Component, OnInit, Output } from '@angular/core';
import { Card } from './models/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() cardset1: Card[];
  @Output() cardset2: Card[];

  constructor() { }

  ngOnInit() {
    this.constructCardSets()
  }

  constructCardSets() {
    this.cardset1 = [
      new Card("portfolio-slide.jpeg", "Some quick example text to build on the card title and make up the bulk of the card's content."),
      new Card("portfolio-slide.jpeg", "Download a PDF version fo my resume here!")
    ];
    this.cardset2 = [
      new Card("portfolio-slide.jpeg", "Take a look at this site's source code here!"),
      new Card("portfolio-slide.jpeg", "Learn how I automate this site's development"),
      new Card("portfolio-slide.jpeg", "Want to hire me...?")
    ];
  }

}
