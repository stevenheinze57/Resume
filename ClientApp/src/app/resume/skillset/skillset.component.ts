import { Component, OnInit, AfterContentInit, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debug } from 'util';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { SkillsetService } from './services/skillset-service.service';
import { Skill } from './models/skill.model';
import { SubSkill } from './models/subskill.model'
import { ActivatedRoute } from '@angular/router';
import { FutureSkill } from './models/futureskill';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {

  @Output() skills: Skill[] = [];
  @Output() subSkills: SubSkill[] = [];
  futureSkills: FutureSkill[] = [];
  @Output() futureSkillsGrouped: any[] = [];
  @Output() renderSkills: boolean = false;

  constructor(private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    this.skills = this.route.snapshot.data.skillsData;
    this.subSkills = this.route.snapshot.data.subSkillsData;
    this.futureSkills = this.route.snapshot.data.futureSkillsData;

    //console.log(this.skills);
    //console.log(this.subSkills);
    //console.log(this.futureSkills);

    if (this.checkData(this.skills) && this.checkData(this.subSkills) && this.checkData(this.futureSkills)) {
      this.sortSkillsByImportance();
      this.sortSubSkillsByImportance();
      this.mapSubSkills();
      this.sortFutureSkillsByInterest();
      this.groupFutureSkills();
      this.renderSkills = true;
    }
  }

  sortSubSkillsByImportance() {
    this.subSkills = this.currentSkillsSorter(this.subSkills);
  }
  
  sortSkillsByImportance() {
    this.skills = this.currentSkillsSorter(this.skills);
  }

  sortFutureSkillsByInterest() {
    this.futureSkills = this.futureSkillsSorter(this.futureSkills);
  }

  mapSubSkills() {
    for (let x = 0; x < this.skills.length; x++) {
      this.skills[x].subSkills = [];

      for (let i = 0; i < this.subSkills.length; i++) {
        if (this.skills[x].id == this.subSkills[i].parentSkillId) {
          this.skills[x].subSkills.push(this.subSkills[i])
        }
      }
    }
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

  // Helper Methods
  currentSkillsSorter(dataToSort) {
    return dataToSort.sort(function (a, b) {
      if (a.scope >= b.scope) {
        if (a.confidenceLevel >= b.confidenceLevel) {
          return -1;
        } else {
          return 1;
        }
      } else {
        return 1;
      }
    });
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

  checkData(data: any[]) {
    return (data.length != 0 && data != null) ? true : false;
  }

}
