import { Component, OnInit, Output } from '@angular/core';
import { Card } from './models/card.model';
import { CarouselSlide } from './models/carouselslide.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() readonly introHeadshot: string = "headshot.jpg";
  @Output() readonly introText: string = "Diam lorem dolores invidunt lorem voluptua tincidunt et dolore takimata sanctus sed elit volutpat lorem ipsum lorem justo et clita dolor consetetur iriure ut nibh rebum lorem dolor diam amet amet eum sea eos vel in lorem kasd tempor nonumy eirmod hendrerit stet accusam at accumsan kasd amet erat lorem eleifend tempor veniam et aliquyam dolore diam wisi te tincidunt est nonumy consetetur eirmod magna sadipscing consequat lobortis vero kasd ipsum ullamcorper consectetuer magna vero in option nonumy elitr sit dolor sea sanctus sed volutpat sea dolores ullamcorper sadipscing sanctus clita lorem nam consetetur consequat ipsum rebum magna no et elitr et labore dolor illum consetetur est sed autem est commodo lorem nonummy sea vulputate dolor ea dolor ea vero sadipscing voluptua nulla iriure elit lorem amet eirmod ut voluptua amet aliquam ipsum gubergren gubergren ea aliquip ipsum elitr eos dolor dolor clita nam iriure mazim iusto stet eirmod velit magna kasd lorem invidunt nonumy et facilisi nonummy qui ut consetetur esse dolores justo nostrud dolore diam volutpat ipsum sed kasd delenit facilisis gubergren eirmod et rebum sea labore sed kasd eirmod sit magna iriure et lorem stet et at takimata sed ut nam et adipiscing invidunt te ipsum ad ipsum diam ea sed at nobis amet nonumy dolor lorem ut sit sadipscing duis sadipscing takimata esse invidunt dolore et clita gubergren commodo eirmod ut labore enim eos magna dolore exerci eos kasd esse odio eirmod takimata et sanctus erat soluta ea wisi est diam elitr qui vulputate ipsum invidunt labore et ut in commodo in et amet dolor at tempor sed sea amet in clita vero lorem sanctus et wisi duis aliquyam duis vero ut no nulla clita amet enim eos no in labore elitr vulputate esse tempor stet sit kasd sit magna elitr ut ullamcorper accusam rebum wisi dolores rebum amet sadipscing vulputate ut invidunt sea et ut stet duo et labore erat rebum erat duo eos duo consetetur ut dolores in gubergren iusto amet lorem est duis gubergren gubergren euismod wisi nulla eleifend vero praesent invidunt consequat ullamcorper erat et ipsum illum sed imperdiet clita volutpat sed vulputate nonumy ipsum veniam accusam dolore ipsum takimata kasd et aliquyam molestie lorem ad at lorem takimata duo takimata erat sed et dolore sed kasd ea vel rebum gubergren amet gubergren in consequat diam gubergren velit kasd ea consetetur vel ipsum dolores justo invidunt amet illum at ut at commodo et euismod lorem takimata tempor eos takimata vulputate justo velit ipsum labore sit et accumsan sit takimata dolore lobortis lobortis sadipscing sadipscing eum illum consetetur eos et nulla sit sed diam vero invidunt elit sed ex amet vulputate hendrerit invidunt et accusam aliquyam ut elitr ut et cum veniam eum vel lorem et sadipscing sanctus augue ut iriure illum rebum eros ut euismod laoreet duo erat dolor esse ullamcorper sadipscing diam ex sed iusto stet eirmod rebum eirmod aliquyam at lorem clita eirmod odio ea elitr elitr diam at minim magna sed no tincidunt feugiat euismod quis assum stet sit";
  @Output() carouselSlideSet: CarouselSlide[];
  @Output() cardset1: Card[];
  @Output() cardset2: Card[];

  constructor() { }

  ngOnInit() {
    this.constructCarouselSet();
    this.constructCardSets();
  }

  constructCarouselSet() {
    this.carouselSlideSet = [
      new CarouselSlide("portfolio-slide.jpeg", "First Slide Label", "Iriure et volutpat nonummy delenit", true),
      new CarouselSlide("dev-help-slide.jpg", "Second Slide Label", "Clita nibh vero augue aliquyam", false),
      new CarouselSlide("sandbox-projects-slide.jpg", "Third Slide Label", "Sit in consetetur feugiat sit", false)
    ]
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
