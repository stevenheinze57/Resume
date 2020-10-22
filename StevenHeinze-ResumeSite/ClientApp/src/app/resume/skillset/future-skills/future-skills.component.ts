import { Component, OnInit, Output, Input } from '@angular/core';
import { FutureSkill } from '../models/futureskill';

@Component({
  selector: 'app-future-skills',
  templateUrl: './future-skills.component.html',
  styleUrls: ['./future-skills.component.css']
})
export class FutureSkillsComponent implements OnInit {

  @Input() futureSkills: FutureSkill[] = [];
  futureSkillsGrouped: any[] = [];

  constructor() { }

  ngOnInit() {
    this.sortFutureSkillsByInterest();
    this.groupFutureSkills();
  }

  sortFutureSkillsByInterest() {
    this.futureSkills = this.futureSkillsSorter(this.futureSkills);
  }

  futureSkillsSorter(dataToSort) {
    return dataToSort.sort(function (a, b) {
      if (a.interestLevel >= b.interestLevel) {
        return -1;
      } else {
        return 1;
      }
    });
  }

  groupFutureSkills() {
    var tempArray = [];
    var tempIndex = 0;
    var arraySizeToggle = true;
    for (let x = 0; x < this.futureSkills.length; x++) {
      tempArray.push(this.futureSkills[x]);
      tempIndex++;
      if (arraySizeToggle && tempIndex == 3) {
        this.futureSkillsGrouped.push(tempArray)
        arraySizeToggle = false;
        tempArray = [];
        tempIndex = 0;
      } else if (!arraySizeToggle && tempIndex == 2) {
        this.futureSkillsGrouped.push(tempArray)
        arraySizeToggle = true;
        tempArray = [];
        tempIndex = 0;
      } else if (this.futureSkills.length - x - 1 == 3) {
        this.futureSkillsGrouped.push(tempArray)
        arraySizeToggle = false;
        tempArray = [];
        tempIndex = 0;
      } else if (this.futureSkills.length == x + 1) {
        this.futureSkillsGrouped.push(tempArray)
      }
    }
  }

}
