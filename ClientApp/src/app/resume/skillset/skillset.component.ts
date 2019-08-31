import { Component, OnInit, AfterContentInit, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debug } from 'util';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { SkillsetService } from './services/skillset-service.service';
import { Skill } from './models/skill.model';
import { SubSkill } from './models/subskill.model'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {

  @Output() skills: Skill[] = [];
  @Output() subSkills: SubSkill[] = [];
  @Output() renderSkills: boolean = false;

  constructor(private service: SkillsetService, private route: ActivatedRoute) {
  }
  
  ngOnInit() {
    this.skills = this.route.snapshot.data.skillsData;
    this.subSkills = this.route.snapshot.data.subSkillsData;

    console.log(this.skills);
    console.log(this.subSkills);

    if (this.checkData(this.skills) && this.checkData(this.subSkills)) {
      this.mapSubSkills();
      //this.sortSkillsByImportance();
      //this.sortSubSkillsByImportance();
      // Some way, the most optimal... to render the progress bar based on the skill confidence level and scope
      this.renderSkills = true;
    }
  }

  checkData(data: any[]) {
    return (data.length != 0 && data != null) ? true : false;
  }

  sortSubSkillsByImportance() {
    for (let y = 0; y < this.skills.length; y++) {
      // some sorting method (look back at old schoolwork)
    }
  }
  
  sortSkillsByImportance() {
    // some sorting method (look back at old schoolwork)
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
