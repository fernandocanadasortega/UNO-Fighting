import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardInformationPage } from './card-information.page';

describe('CardInformationPage', () => {
  let component: CardInformationPage;
  let fixture: ComponentFixture<CardInformationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
