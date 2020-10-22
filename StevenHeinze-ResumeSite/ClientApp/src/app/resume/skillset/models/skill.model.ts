import { SubSkill } from "./subskill.model";

export class Skill {

  public id: number;
  public name: string;
  public confidenceLevel: number;
  public yearsOfExperience: number;
  public scope: number;
  public subSkills: SubSkill[];
}
