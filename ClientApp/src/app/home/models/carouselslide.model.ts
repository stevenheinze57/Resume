
export class CarouselSlide {

  slideImage: string;
  slideLabel: string;
  slideText: string;
  activeFirst: boolean;

  constructor(slideImage: string, slideLabel: string, slideText: string, activeFirst: boolean) {
    this.slideImage = slideImage;
    this.slideLabel = slideLabel;
    this.slideText = slideText;
    this.activeFirst = activeFirst;
  }
}
