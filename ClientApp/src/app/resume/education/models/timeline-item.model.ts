

export class TimelineItem {
  title: string;
  name: string;
  startTime: string;
  endTime: string;
  logoFileName: string;
  description: string;

  constructor(title: string, name: string, startTime: string, endTime: string, logoFileName: string, description: string) {
    this.title = title;
    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
    this.logoFileName = logoFileName;
    this.description = description;
  }
}
