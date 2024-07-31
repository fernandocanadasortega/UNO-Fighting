import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialComponentsModule } from '../../material-components.module';
import { CreateSearchTournamentComponent } from '../../components/create-search-tournament/create-search-tournament.component';
import { HeaderComponent } from '../../components/header/header.component';
import { UtilsService } from 'services/utils.service';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'tournaments',
  templateUrl: './tournament.page.html',
  styleUrls: ['./tournament.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule, MaterialComponentsModule, CreateSearchTournamentComponent, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Tournament implements AfterViewInit {

  public smallDescriptionHeight: number = 0;
  public normalDescriptionHeight: number = 0;
  public currentDescriptionHeight: number = 0;
  public activeDescriptionToggle: boolean = true;

  @ViewChild('leaderboardSwiperHeader', { static: false }) leaderboardSwiperHeader!: ElementRef;
  @ViewChild('leaderboardSwiperBody', { static: false }) leaderboardSwiperBody!: ElementRef;
  public activeInformationSwiperHeader: number = 0;

  public sessionOn: boolean = false; // TODO - BORRAR TRAS LAS PRUEBAS

  constructor(private utils: UtilsService) { }

  ngAfterViewInit() {
    this.calculateDescriptionHeight();
    this.startInformationSwiperHeader(this.leaderboardSwiperHeader);
    this.startInformationSwiperBody(this.leaderboardSwiperBody);


    // this.sessionOn = Math.round(Math.random()) == 0 ? false : true; // TODO - BORRAR TRAS LAS PRUEBAS
    this.sessionOn = true;
  }

  navigateToSession() {
    // this.utils.navigateReplacingUrl('tournament/game-session');
  }

  refreshGameSession(refreshEvent: any) {
    setTimeout(() => {
      // Any calls to load data go here
      refreshEvent.target.complete();
    }, 1000);
  }

  calculateDescriptionHeight(rerun: boolean = false) {
    let descriptionLabel = document.getElementById('description-label');
    if (descriptionLabel == null) {
      return;
    }

    this.normalDescriptionHeight = descriptionLabel.offsetHeight;
    // Ponermos la propiedad de rerun para que no este infinitamente cargando.
    if (this.normalDescriptionHeight == 0 && !rerun) {
      setTimeout(() => {
        this.calculateDescriptionHeight(true);
      }, 200);

      return;
    }

    const labelComputedStyle = window.getComputedStyle(descriptionLabel);
    const lineHeight: number = parseInt(labelComputedStyle.lineHeight);
    const lineCount: number = Math.round(this.normalDescriptionHeight / lineHeight);

    // Si solo hubiera 3 líneas de descripción no se activa el toggle, ni se oculta parte de la descripción.
    if (lineCount <=3) {
      this.activeDescriptionToggle = false;
      return;
    }

    let descriptionContainer = document.getElementById('description-container');
    if (descriptionContainer == null) {
      return;
    }

    // Hacemos una regla de tres para calcular cual seria la altura que tendria que tener el div si solo tuviera 3 líneas.
    this.smallDescriptionHeight = (this.normalDescriptionHeight * 3) / lineCount;
    descriptionContainer.style.height = `${this.smallDescriptionHeight}px`;
    this.currentDescriptionHeight = this.smallDescriptionHeight;
  }

  toggleDescription() {
    let descriptionContainer = document.getElementById('description-container');
    if (descriptionContainer == null) {
      return;
    }

    // Actualizamos la altura de la descripción
    this.currentDescriptionHeight = (this.currentDescriptionHeight == this.smallDescriptionHeight) ? this.normalDescriptionHeight : this.smallDescriptionHeight;
    descriptionContainer.style.height = `${this.currentDescriptionHeight}px`;
  }

  startInformationSwiperHeader(swiper: ElementRef) {
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

    Object.assign(swiper.nativeElement, swiperParams);
    swiper.nativeElement.initialize();
  }

  startInformationSwiperBody(swiper: ElementRef) {
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

    Object.assign(swiper.nativeElement, swiperParams);
    swiper.nativeElement.initialize();
  }
}
