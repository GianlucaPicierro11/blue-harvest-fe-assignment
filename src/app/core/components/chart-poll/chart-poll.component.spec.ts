import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartPollComponent } from './chart-poll.component';

describe('ChartPollComponent', () => {
  let component: ChartPollComponent;
  let fixture: ComponentFixture<ChartPollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartPollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
