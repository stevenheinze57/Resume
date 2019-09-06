import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubSkill } from '../models/subskill.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-current-skills',
  templateUrl: './current-skills.component.html',
  styleUrls: ['./current-skills.component.css']
})
export class CurrentSkillsComponent implements OnInit {

  @Input() skills: Skill[] = [];
  @Input() subSkills: SubSkill[] = [];

  constructor() { }

  ngOnInit() {
    this.sortSkillsByImportance();
    this.sortSubSkillsByImportance();
    this.mapSubSkills();
  }

  sortSubSkillsByImportance() {
    this.subSkills = this.currentSkillsSorter(this.subSkills);
  }

  sortSkillsByImportance() {
    this.skills = this.currentSkillsSorter(this.skills);
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

}
