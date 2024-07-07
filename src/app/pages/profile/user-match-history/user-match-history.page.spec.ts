import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserMatchHistoryPage } from './user-match-history.page';

describe('UserMatchHistoryPage', () => {
  let component: UserMatchHistoryPage;
  let fixture: ComponentFixture<UserMatchHistoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserMatchHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
