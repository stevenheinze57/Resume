import { OnInit, Input, Directive, HostBinding, ElementRef, Output } from "@angular/core";
import { WorkPosition } from "../models/workposition.model";

@Directive({
  selector: '[workPositionsGroupDirective]'
})
export class WorkPositionsGroupDirective implements OnInit {

  twoColumns: string = 'col-xs-6 col-sm-6 col-md-6 col-lg-6';
  oneColumn: string = 'col-xs-12 col-sm-12 col-md-12 col-lg-12';

  @HostBinding('class') workPositionsColumnLength: string = "";
  @Input() workPositionsGroup: WorkPosition[];

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.setColumnWidth()
    this.setStartMonthAndYear()
    this.setEndMonthAndYear()
  }

  setColumnWidth() {
    if (this.workPositionsGroup.length == 2) {
      this.workPositionsColumnLength = this.twoColumns;
    } else if (this.workPositionsGroup.length == 1) {
      this.workPositionsColumnLength = this.oneColumn;
    } else {
      this.workPositionsColumnLength = this.oneColumn;
      console.log("workPositionGroup Length is not equal to 1 or 2")
    }
  }

  setStartMonthAndYear() {
    // Figure out a way to bind this variable to the text in html
    for (let x = 0; x < this.workPositionsGroup.length; x++) {
      //this.workPositionsGroup[x].startMonthAndYear = this.determineMonth(this.workPositionsGroup[x].startDate.toString());
      this.workPositionsGroup[x].startMonthAndYear = "Test";
    }
  }

  setEndMonthAndYear() {
    // Figure out a way to bind this variable to the text in html
    for (let x = 0; x < this.workPositionsGroup.length; x++) {
      this.workPositionsGroup[x].endMonthAndYear = "Test";
    }
  }

  determineMonth(dateTimeObj) {
    var month = dateTimeObj.substring(5, 7)
    console.log(month)
    //switch (dateTimeObj) {
    //  case
    //}
  }

}
