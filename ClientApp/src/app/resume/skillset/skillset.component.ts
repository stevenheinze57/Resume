import { Component, OnInit, AfterContentInit, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debug } from 'util';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { SkillsetService } from './services/skillset-service.service';
import { Skill } from './models/skill.model';
import { SubSkill } from './models/subskill.model'

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {

  @Output() skills: Skill[] = [];
  @Output() subSkills: SubSkill[] = [];
  @Output() renderSkills: boolean = false;

  constructor(private skillsetService: SkillsetService) { }

  ngOnInit() {
    let skillsData: Skill[];
    let subSkillsData: SubSkill[];

    this.skillsetService.getSubSkills().subscribe(data =>
    {
      subSkillsData = data as SubSkill[];
    });

    this.skillsetService.getSkills().subscribe(data => {
      skillsData = data as Skill[];
      if (skillsData.length != 0 && subSkillsData.length != 0) {
        this.skills = skillsData;
        this.subSkills = subSkillsData;
        this.mapSubSkills();
        this.renderSkills = true;
      }
    });
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

}
