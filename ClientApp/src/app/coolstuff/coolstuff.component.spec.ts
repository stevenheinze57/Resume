import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolstuffComponent } from './coolstuff.component';

describe('CoolstuffComponent', () => {
  let component: CoolstuffComponent;
  let fixture: ComponentFixture<CoolstuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolstuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolstuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
