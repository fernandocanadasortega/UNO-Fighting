import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TournamentsList } from './tournaments-list.page';

describe('TournamentsPage', () => {
  let component: TournamentsList;
  let fixture: ComponentFixture<TournamentsList>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(TournamentsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
