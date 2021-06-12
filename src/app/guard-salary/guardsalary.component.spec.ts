import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardSalaryComponent } from './guardsalary.component';

describe('GuardSalaryComponent', () => {
  let component: GuardSalaryComponent;
  let fixture: ComponentFixture<GuardSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
