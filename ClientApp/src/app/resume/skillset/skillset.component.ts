import { Component, OnInit, AfterContentInit, Output, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debug } from 'util';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { SkillsetService } from './services/skillset-service.service';
import { Skill } from './models/skill.model';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {

  @Output() skills: Skill[] = [];
  @Output() renderSkills: boolean = false;

  constructor(private skillsetService: SkillsetService) { }

  ngOnInit() {
    this.skillsetService.getSkills().subscribe(data =>
    {
      this.skills = data as Skill[];
      this.renderSkills = true;
    });
  }
}
