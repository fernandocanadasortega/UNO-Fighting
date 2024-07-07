import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserStatsDetailPage } from './user-stats-detail.page';

describe('UserStatsDetailPage', () => {
  let component: UserStatsDetailPage;
  let fixture: ComponentFixture<UserStatsDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserStatsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
