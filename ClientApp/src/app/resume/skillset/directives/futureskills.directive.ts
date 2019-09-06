import { FutureSkill } from "../models/futureskill";
import { OnInit, Input, Directive, HostBinding, ElementRef } from "@angular/core";

@Directive({
  selector: '[futureSkillsDirective]'
})
export class FutureSkillsDirective implements OnInit {

  threeColumns: string = 'col-xs-4 col-sm-4 col-md-4 col-lg-4';
  twoColumns: string = 'col-xs-6 col-sm-6 col-md-6 col-lg-6';
  oneColumn: string = 'col-xs-12 col-sm-12 col-md-12 col-lg-12';

  @HostBinding('class') futureSkillsColumnLength: string = '';
  @Input() futureSkillGroup: FutureSkill[];

  constructor(private el: ElementRef) { }

  ngOnInit() {
    //console.log(this.futureSkillGroup)
    this.setColumnWidth()
  }

  setColumnWidth() {
    if (this.futureSkillGroup.length == 3) {
      this.futureSkillsColumnLength = this.threeColumns;
    } else if (this.futureSkillGroup.length == 2) {
      this.futureSkillsColumnLength = this.twoColumns;
    } else if (this.futureSkillGroup.length == 1) {
      this.futureSkillsColumnLength = this.oneColumn;
    } else {
      this.futureSkillsColumnLength = this.oneColumn;
      console.log("futureSkillGroup Length is not equal to 3, or 2, or 1...");
    }
  }

}
