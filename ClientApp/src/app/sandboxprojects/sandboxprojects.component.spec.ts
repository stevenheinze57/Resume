import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandboxprojectsComponent } from './sandboxprojects.component';

describe('SandboxprojectsComponent', () => {
  let component: SandboxprojectsComponent;
  let fixture: ComponentFixture<SandboxprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandboxprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
