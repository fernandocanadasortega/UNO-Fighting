import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserStatsPage } from './user-stats.page';

describe('UserStatsPage', () => {
  let component: UserStatsPage;
  let fixture: ComponentFixture<UserStatsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
