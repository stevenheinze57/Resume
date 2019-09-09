import { Component, OnInit, Input } from '@angular/core';
import { TimelineItem } from '../models/timeline-item.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() timelineItems: TimelineItem[];

  constructor() { }

  ngOnInit() {
  }

}
