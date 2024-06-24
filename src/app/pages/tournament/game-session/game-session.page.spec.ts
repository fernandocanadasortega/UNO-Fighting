import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameSessionPage } from './game-session.page';

describe('GameSessionPage', () => {
  let component: GameSessionPage;
  let fixture: ComponentFixture<GameSessionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GameSessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
