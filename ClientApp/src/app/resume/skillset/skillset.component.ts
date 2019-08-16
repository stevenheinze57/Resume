import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {

  accordionActive: boolean = true

  constructor() { }

  ngOnInit() {
  }

  toggleAccordionActive(event) {
    this.accordionActive = !(this.accordionActive);
  }

}
