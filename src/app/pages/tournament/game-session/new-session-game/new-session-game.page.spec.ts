import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewSessionGamePage } from './new-session-game.page';

describe('NewSessionGamePage', () => {
  let component: NewSessionGamePage;
  let fixture: ComponentFixture<NewSessionGamePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewSessionGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
