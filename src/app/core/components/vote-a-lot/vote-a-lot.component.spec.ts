import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteALotComponent } from './vote-a-lot.component';

describe('VoteALotComponent', () => {
  let component: VoteALotComponent;
  let fixture: ComponentFixture<VoteALotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteALotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteALotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
