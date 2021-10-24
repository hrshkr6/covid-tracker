import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateInfographComponent } from './state-infograph.component';

describe('StateInfographComponent', () => {
  let component: StateInfographComponent;
  let fixture: ComponentFixture<StateInfographComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateInfographComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateInfographComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
