import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardShiftComponent } from './guardshift.component';

describe('GuardShiftComponent', () => {
  let component: GuardShiftComponent;
  let fixture: ComponentFixture<GuardShiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardShiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
