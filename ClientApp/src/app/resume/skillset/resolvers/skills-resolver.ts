import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Skill } from "../models/skill.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SkillsetService } from "../services/skillset-service.service";

@Injectable()
export class SkillsResolver implements Resolve<Skill[]> {

  skillsetService: SkillsetService;

  constructor(private service: SkillsetService) {
    this.skillsetService = service;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Skill[]> {
    return this.skillsetService.getSkills();
  }

}
