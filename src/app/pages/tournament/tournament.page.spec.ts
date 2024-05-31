import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Tournament } from './tournament.page';

describe('TournamentsPage', () => {
  let component: Tournament;
  let fixture: ComponentFixture<Tournament>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(Tournament);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
