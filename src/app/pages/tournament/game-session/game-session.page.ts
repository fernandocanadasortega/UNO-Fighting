import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { MaterialComponentsModule } from '../../../material-components.module';
import { NewSessionGamePage } from './new-session-game/new-session-game.page';
import { UtilsService } from 'services/utils.service';

@Component({
  selector: 'game-session',
  templateUrl: './game-session.page.html',
  styleUrls: ['./game-session.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, TranslateModule, MaterialComponentsModule, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GameSessionPage implements OnInit {

  constructor(
    private utils: UtilsService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.log('Cargan la sesión de juego');
    // this.initializeSwiper();
  }

  initializeSwiper() {
    // swiper element
    const swiper = document.querySelector('swiper-container');

    if (!swiper) {
      return;
    }

    // swiper parameters
    const swiperParams = {
      slidesPerView: 1,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      on: {
        init() {
          console.log('Método ON - init');
        },
      }
    };

    // now we need to assign all parameters to Swiper element
    Object.assign(swiper, swiperParams);

    // and now initialize it
    swiper.initialize();
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
