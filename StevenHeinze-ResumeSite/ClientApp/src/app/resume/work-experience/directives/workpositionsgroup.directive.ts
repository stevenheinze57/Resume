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
    for (let x = 0; x < this.workPositionsGroup.length; x++) {
      var startMonth = this.determineMonth(this.workPositionsGroup[x].startDate.toString());
      var startYear = this.determineYear(this.workPositionsGroup[x].startDate.toString());
      this.workPositionsGroup[x].startMonthAndYear = startMonth + " " + startYear;
    }
  }

  setEndMonthAndYear() {
    for (let x = 0; x < this.workPositionsGroup.length; x++) {
      if (this.workPositionsGroup[x].currentPosition) {
        this.workPositionsGroup[x].endMonthAndYear = "Present"
      } else {
        var endMonth = this.determineMonth(this.workPositionsGroup[x].endDate.toString());
        var endYear = this.determineYear(this.workPositionsGroup[x].endDate.toString());
        this.workPositionsGroup[x].endMonthAndYear = endMonth + " " + endYear;
      }
    }
  }

  determineMonth(dateTimeObj) {
    var month = dateTimeObj.substring(5, 7)
    console.log(month)
    switch (month) {
      case "01": 
        return "January";
      case "02":
        return "February";
      case "03":
        return "March";
      case "04":
        return "April";
      case "05":
        return "May";
      case "06":
        return "June";
      case "07":
        return "July";
      case "08":
        return "August";
      case "09":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
      default:
        return "N/A"
    }
  }

  determineYear(dateTimeObj) {
    var year = dateTimeObj.substring(0, 4)
    return year
  }

}
