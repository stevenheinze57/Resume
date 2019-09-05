import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Skill } from "../models/skill.model";
import { Injectable } from "@angular/core";
import { SkillsetService } from "./skillset-service.service";
import { Observable } from "rxjs";
import { SubSkill } from "../models/subskill.model";

@Injectable()
export class SubSkillsResolver implements Resolve<SubSkill[]> {

  skillsetService: SkillsetService;

  constructor(private service: SkillsetService) {
    this.skillsetService = service;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SubSkill[]> {
    return this.skillsetService.getSubSkills();
  }

}
