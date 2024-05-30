import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { SearchTournament } from './search-tournament.page';

describe('NewTournamentPage', () => {
  let component: SearchTournament;
  let fixture: ComponentFixture<SearchTournament>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(SearchTournament);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
