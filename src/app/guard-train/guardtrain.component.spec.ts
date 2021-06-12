import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardTrainComponent } from './guardtrain.component';

describe('GuardTrainComponent', () => {
  let component: GuardTrainComponent;
  let fixture: ComponentFixture<GuardTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
