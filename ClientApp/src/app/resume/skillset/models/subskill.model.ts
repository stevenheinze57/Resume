import { Skill } from "./skill.model";

export class SubSkill extends Skill {
  public parentSkillId: number;
  public description: string;
}
