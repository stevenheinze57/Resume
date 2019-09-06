import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentSkillsComponent } from './current-skills.component';

describe('CurrentSkillsComponent', () => {
  let component: CurrentSkillsComponent;
  let fixture: ComponentFixture<CurrentSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
