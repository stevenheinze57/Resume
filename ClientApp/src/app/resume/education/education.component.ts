import { Component, OnInit, Output } from '@angular/core';
import { TimelineItem } from './models/timeline-item.model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  @Output() timelineItems: TimelineItem[];

  constructor() { }
  ngOnInit() {
    this.constructTimeline();
    this.reversTimeline();
  }

  constructTimeline() {
    this.timelineItems = [
      new TimelineItem("Dundalk High School", "September 2009", "June 2013", "dundalk-high-logo", "Some dummy text....."),
      new TimelineItem("Community College of Baltimore County", "September 2013", "May 2015", "ccbc-logo", "Some more dummy text....."),
      new TimelineItem("Towson State University", "September 2015", "December 2017", "towson-logo", "Even more dummy text....."),
      new TimelineItem("Self Taught Programming", "January 2018", "Present", "self-taught-logo", "Yet even more dummy text....."),
      new TimelineItem("Future Education Plans", "Presnt", "TBD.", "future-education-logo", "it doesn't stop.....")
    ];
  }

  reversTimeline() {
    this.timelineItems = this.timelineItems.reverse();
  }

}
