import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Skill } from '../models/skill.model';

@Injectable()
export class SkillsetService {

  skillsApiUrl = "http://localhost:5001/api/skills";

  constructor(private httpClient: HttpClient) { }

  getSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>('https://localhost:5001/api/skills');
  }

}
