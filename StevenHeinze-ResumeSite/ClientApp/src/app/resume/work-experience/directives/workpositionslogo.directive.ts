import { OnInit, Input, Directive, HostBinding, ElementRef, Output } from "@angular/core";

@Directive({
  selector: '[workPositionsLogoDirective]'
})
export class WorkPositionsLogoDirective implements OnInit {

  upsLogo: string = "ups-logo.png";
  radnetLogo: string = "radnet-logo.png";
  wendysLogo: string = "wendys-logo.png";
  costcoLogo: string = "costco-logo.png";

  @HostBinding('src') workPositionsLogo: string = "../../../assets/images/";
  @Input() workPosition: string = "";

  ngOnInit() {
    this.determineLogoImage()
  }

  determineLogoImage() {
    if (this.workPosition == "United Parcel Service (UPS)") {
      this.workPositionsLogo = this.workPositionsLogo + this.upsLogo;
    } else if (this.workPosition == "Radnet") {
      this.workPositionsLogo = this.workPositionsLogo + this.radnetLogo;
    } else if (this.workPosition == "Costco Wholesale") {
      this.workPositionsLogo = this.workPositionsLogo + this.costcoLogo;
    } else if (this.workPosition == "Davco Restaurants") {
      this.workPositionsLogo = this.workPositionsLogo + this.wendysLogo;
    }
  }

}
