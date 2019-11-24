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

  workPositionsGrouped: any[] = [];

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
    console.log(this.workPositionsGrouped)
  }

  checkData(data: any[]) {
    return (data.length != 0 && data != null) ? true : false;
  }

  sortWorkPositions() {
    this.workPositions = this.workPositionsSorter(this.workPositions);
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
    var tempArray = [];
    var tempIndex = 0;
    var arraySizeToggle = false;
    for (let x = 0; x < this.workPositions.length; x++) {
      tempArray.push(this.workPositions[x]);
      tempIndex++;
      if (tempIndex == 2) {
        this.workPositionsGrouped.push(tempArray)
        arraySizeToggle = true;
        tempArray = [];
        tempIndex = 0;
      } else if (arraySizeToggle && this.workPositions.length == x + 2) {
        continue;
      } else if (arraySizeToggle && this.workPositions.length == x + 1) {
        this.workPositionsGrouped.push(tempArray)
      } else if (arraySizeToggle) {
        this.workPositionsGrouped.push(tempArray);
        arraySizeToggle = false;
        tempArray = [];
        tempIndex = 0;
      }
    }
  }

  workPositionsSorter(dataToSort) {
    return dataToSort.sort(function (a, b) {
      if (a.endDate >= b.endDate) {
        return -1;
      } else {
        return 1;
      }
    );
  }

}
