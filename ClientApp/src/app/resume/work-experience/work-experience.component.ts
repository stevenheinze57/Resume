import { Component, OnInit, Output } from '@angular/core';
import { WorkExperience } from './models/workexperience.model';
import { WorkPosition } from './models/workposition.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  @Output() workExperiences: WorkExperience[] = [];
  @Output() workPositions: WorkPosition[] = [];
  renderWorkExperience: boolean = false;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.workExperiences = this.route.snapshot.data.workExperiencesData;
    this.workPositions = this.route.snapshot.data.workPositionsData;

    console.log(this.workExperiences)
    console.log(this.workPositions)

    if (this.checkData(this.workExperiences) && this.checkData(this.workPositions)) {
      this.sortWorkPositions();
      this.mapWorkExperiences();
      this.groupWorkPositions();
      this.renderWorkExperience = true;
    }
  }

  checkData(data: any[]) {
    return (data.length != 0 && data != null) ? true : false;
  }

  sortWorkPositions() {
    // Sort them based on date (Most recent position first)
    // Figure out how to change the workPosition data model in SQL and the backend to be date/time
    // Then when it gets passed to the frontend here its just a matter of comparing the two
    // The format however should be MM/YYYY (No days in the date, just months and years)
  }
  
  mapWorkExperiences() {
    for (let x = 0; x < this.workPositions.length; x++) {
      this.workPositions[x].workExperiences = [];

      for (let i = 0; i < this.workExperiences.length; i++) {
        if (this.workPositions[x].id == this.workExperiences[i].workPositionId) {
          this.workPositions[x].workExperiences.push(this.workExperiences[i])
        }
      }
    }
  }

  groupWorkPositions() {
    // Group Skills in the following pattern: 2,1,2,1,2,1,2,1,2.....
  }
}
