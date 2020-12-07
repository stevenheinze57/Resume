
export class Card {

  cardImage: string;
  cardText: string;
  cardLink: string;

  constructor(cardImagePath: string, cardText: string, cardLink: string) {
    this.cardImage = cardImagePath;
    this.cardText = cardText;
    this.cardLink = cardLink;
  }

}
