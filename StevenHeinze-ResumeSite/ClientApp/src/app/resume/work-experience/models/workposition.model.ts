import { WorkExperience } from "./workexperience.model";

export class WorkPosition {
  public id: number;
  public company: string;
  public role: string;
  public startDate: Date;
  public endDate: Date;
  public workExperiences: WorkExperience[];
  public startMonthAndYear: string;
  public endMonthAndYear: string;
  public currentPosition: boolean;
}
