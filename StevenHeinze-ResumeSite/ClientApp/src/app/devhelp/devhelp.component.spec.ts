import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevhelpComponent } from './devhelp.component';

describe('DevhelpComponent', () => {
  let component: DevhelpComponent;
  let fixture: ComponentFixture<DevhelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevhelpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevhelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
