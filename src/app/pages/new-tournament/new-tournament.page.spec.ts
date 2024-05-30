import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NewTournamentPage } from './new-tournament.page';

describe('NewTournamentPage', () => {
  let component: NewTournamentPage;
  let fixture: ComponentFixture<NewTournamentPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(NewTournamentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
