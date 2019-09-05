import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "@angular/router";
import { FutureSkill } from "../models/futureskill";
import { Observable } from "rxjs";
import { SkillsetService } from "./skillset-service.service";

@Injectable()
export class FutureSkillsResolver implements Resolve<FutureSkill[]> {

  skillsetService: SkillsetService;

  constructor(private service: SkillsetService) {
    this.skillsetService = service;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FutureSkill[]> {
    return this.skillsetService.getFutureSkills();
  }

}
