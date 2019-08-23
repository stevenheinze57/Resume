import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debug } from 'util';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  skills: Skill[];
  ngOnInit() {
    this.httpService.get('https://localhost:5001/api/skills').subscribe(data => { this.skills = data as Skill[]; });
    console.log(this.skills);
  }

}
