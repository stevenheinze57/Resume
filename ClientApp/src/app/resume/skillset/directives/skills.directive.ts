import { Directive, HostBinding, ElementRef, OnInit, ViewChild, Input } from "@angular/core";
import { Skill } from "../models/skill.model";

@Directive({
  selector: '[skillsDirective]'
})
export class SkillsDirective implements OnInit {

  @HostBinding('class.progress-bar-success') fourthBracket = false;
  @HostBinding('class.progress-bar-info') thirdBracket = false;
  @HostBinding('class.progress-bar-warning') secondBracket = false;
  @HostBinding('class.progress-bar-danger') firstBracket = false;

  @HostBinding('style.width.%') width: number;

  @Input() skill: Skill;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.determineProgressColor();
    this.determineProgressWidth();
  }

  determineProgressColor() {
    if (this.skill.confidenceLevel < 50) {
      this.firstBracket = true;
    } else if (this.skill.confidenceLevel < 60) {
      this.secondBracket = true;
    } else if (this.skill.confidenceLevel < 70) {
      this.thirdBracket = true;
    } else if (this.skill.confidenceLevel < 80) {
      this.fourthBracket = true;
    }
  }

  determineProgressWidth() {
    this.width = this.skill.confidenceLevel;
  }

}
