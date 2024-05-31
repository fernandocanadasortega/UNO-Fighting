import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BugReport } from './bug-report.page';

describe('BugReportPage', () => {
  let component: BugReport;
  let fixture: ComponentFixture<BugReport>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BugReport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
