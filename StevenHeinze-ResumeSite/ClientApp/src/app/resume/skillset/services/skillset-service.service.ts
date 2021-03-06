import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Skill } from '../models/skill.model';
import { SubSkill } from '../models/subskill.model';
import { FutureSkill } from '../models/futureskill';

@Injectable()
export class SkillsetService {

  // TODO: eventually pass these in as arguments to the http clients below
  SKILLS_API_URL: string = 'https://localhost:5001/api/skills';
  SUBSKILLS_API_URL: string = 'https://localhost:5001/api/subskills';

  constructor(private httpClient: HttpClient) { }

  getSkills() {
    return this.httpClient.get<Skill[]>('http://104.129.131.154:5000/api/skills'); 
  }

  getSubSkills() {
    return this.httpClient.get<SubSkill[]>('http://104.129.131.154:5000/api/subskills');
  }

  getFutureSkills() {
    return this.httpClient.get<FutureSkill[]>('http://104.129.131.154:5000/api/futureskills');
  }

}
