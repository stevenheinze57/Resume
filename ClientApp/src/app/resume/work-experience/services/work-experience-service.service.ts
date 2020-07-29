import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { WorkExperience } from "../models/workexperience.model";
import { WorkPosition } from "../models/workposition.model";

@Injectable()
export class WorkExperienceService {

  // TODO: eventually pass these in as arguments to the http clients below
  WORKPOSITION_API_URL: string = 'https://localhost:5001/api/workpositions'
  WORKEXPERIENCE_API_URL: string = 'https://localhost:5001/api/workexperiences'

  constructor(private httpClient: HttpClient) { }

  getWorkPositions() {
    return this.httpClient.get<WorkPosition[]>('https://localhost:5001/api/workpositions')
  }

  getWorkExperiences() {
    return this.httpClient.get<WorkExperience[]>('https://localhost:5001/api/workexperiences')
  }

}
