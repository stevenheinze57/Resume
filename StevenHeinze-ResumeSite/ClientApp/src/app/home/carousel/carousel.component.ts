import { Component, OnInit, Input, Optional } from '@angular/core';
import { CarouselSlide } from '../models/carouselslide.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() carouselSlideDeck: CarouselSlide[];

  constructor(@Optional() carouselSlideDeck: CarouselSlide[]) {
    this.carouselSlideDeck = carouselSlideDeck;
  }

  ngOnInit() {
  }

}
