import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdvancedProfileSettingsPage } from './advanced-profile-settings.page';

describe('UserStatsPage', () => {
  let component: AdvancedProfileSettingsPage;
  let fixture: ComponentFixture<AdvancedProfileSettingsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdvancedProfileSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
