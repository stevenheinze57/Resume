import { WorkExperience } from "./workexperience.model";

export class WorkPosition {
  public id: number;
  public company: string;
  public role: string;
  public startDate: string;
  public endDate: string;
  public workExperiences: WorkExperience[];
}
