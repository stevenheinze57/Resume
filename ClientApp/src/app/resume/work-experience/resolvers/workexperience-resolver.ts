import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WorkExperience } from "../models/workexperience.model";
import { WorkExperienceService } from "../services/work-experience-service.service";

@Injectable()
export class WorkExperienceResolver implements Resolve<WorkExperience[]> {

  workexperienceService: WorkExperienceService;

  constructor(private service: WorkExperienceService) {
    this.workexperienceService = service;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<WorkExperience[]> {
    return this.workexperienceService.getWorkExperiences();
  }

}
