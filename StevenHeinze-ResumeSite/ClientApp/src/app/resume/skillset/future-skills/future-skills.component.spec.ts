import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureSkillsComponent } from './future-skills.component';

describe('FutureSkillsComponent', () => {
  let component: FutureSkillsComponent;
  let fixture: ComponentFixture<FutureSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
