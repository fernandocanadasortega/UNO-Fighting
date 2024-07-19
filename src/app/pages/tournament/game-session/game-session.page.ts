import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { MaterialComponentsModule } from '../../../material-components.module';
import { NewSessionGamePage } from './new-session-game/new-session-game.page';
import { UtilsService } from 'services/utils.service';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'game-session',
  templateUrl: './game-session.page.html',
  styleUrls: ['./game-session.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, TranslateModule, MaterialComponentsModule, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GameSessionPage implements AfterViewInit {

  @ViewChild('matchHistorySwiperHeader', { static: false }) matchHistorySwiperHeader!: ElementRef;
  @ViewChild('matchHistorySwiperBody', { static: false }) matchHistorySwiperBody!: ElementRef;

  public activeInformationSwiperHeader: number = 0;

  constructor(
    private utils: UtilsService,
    private modalCtrl: ModalController
  ) { }

  ngAfterViewInit(): void {
    this.startInformationSwiperHeader();
    this.startInformationSwiperBody();
  }

  startInformationSwiperHeader() {
    const swiperParams: SwiperOptions = {
      initialSlide: 0,
      slidesPerView: 2,
      watchSlidesProgress: true,
      breakpoints: {
        412: { // Pantallas de Android promedio 421px (En todos los dispositivos con >= 412px se muestras 3 cabeceras)
          slidesPerView: 3
        }
      }
    };

    Object.assign(this.matchHistorySwiperHeader.nativeElement, swiperParams);
    this.matchHistorySwiperHeader.nativeElement.initialize();
  }

  startInformationSwiperBody() {
    const swiperParams: SwiperOptions = {
      initialSlide: 0,
      slidesPerView: 1,
      spaceBetween: 30,
      autoHeight: true,
      observer: true, // Actualiza el estado visual del swiper-slide (Comprueba entre otras cosas si la altura del slide ha cambiado)
      observeParents: true,
      observeSlideChildren: true,
      on: {
        slideChange: (slide: any) => {
          this.activeInformationSwiperHeader = slide.activeIndex;
          window.dispatchEvent(new Event('resize')); // ES OBLIGATORIO QUE SE PRODUZCA UN RESIZE PARA QUE SE ACTUALICE EL COLOR DEL TAB SELECCIONADO (NO SE ACTUALIZA VISUALMENTE SWIPER-SLIDE SI NO SE PRODUCE UN RESIZE)
        },
      }
    };

    Object.assign(this.matchHistorySwiperBody.nativeElement, swiperParams);
    this.matchHistorySwiperBody.nativeElement.initialize();
  }

  navigateTournament() {
    this.utils.navigateReplacingUrl('/tournament');
  }

  refreshGameSession(refreshEvent: any) {
    setTimeout(() => {
      // Any calls to load data go here
      refreshEvent.target.complete();
    }, 1000);
  }

  async manageGameMatch(matchResult?: any) {
    const modal = await this.modalCtrl.create({
      component: NewSessionGamePage
    });
    modal.present();
  }

  async manageSession() {
    console.log('Manage session');
  }

  endSession() {
    // todo - añadir popup de confirmación
    this.utils.navigateReplacingUrl('/tournament');
  }
}
