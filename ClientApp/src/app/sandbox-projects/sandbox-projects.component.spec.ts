import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxProjectsComponent } from './sandbox-projects.component';

describe('SandboxProjectsComponent', () => {
  let component: SandboxProjectsComponent;
  let fixture: ComponentFixture<SandboxProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandboxProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
