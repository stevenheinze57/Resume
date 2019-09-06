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
  @Output() futureSkills: FutureSkill[] = [];
  renderSkills: boolean = false;

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
      this.renderSkills = true;
    }
  }

  checkData(data: any[]) {
    return (data.length != 0 && data != null) ? true : false;
  }

}
