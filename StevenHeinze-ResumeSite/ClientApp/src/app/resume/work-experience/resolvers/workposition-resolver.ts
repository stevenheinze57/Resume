import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { WorkPosition } from "../models/workposition.model";
import { WorkExperienceService } from "../services/work-experience-service.service";

@Injectable()
export class WorkPositionResolver implements Resolve<WorkPosition[]> {

  workexperienceService: WorkExperienceService;

  constructor(private service: WorkExperienceService) {
    this.workexperienceService = service;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<WorkPosition[]> {
    return this.workexperienceService.getWorkPositions();
  }

}
