import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialComponentsModule } from '../../material-components.module';
import { UtilsService } from '../../services/utils.service';
import { HeaderComponent } from '../../components/header/header.component';
import { SwiperOptions } from 'swiper/types';

export enum InformationSwiperHeaderType {
  OVERVIEW,
  STATS,
  SOCIAL
}

@Component({
  selector: 'profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule, MaterialComponentsModule, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfilePage implements AfterViewInit {

  @ViewChild('profileInformationSwiperHeader', { static: false }) profileInformationSwiperHeader!: ElementRef;
  @ViewChild('profileInformationSwiperBody', { static: false }) profileInformationSwiperBody!: ElementRef;

  public activeInformationSwiperHeader: number = InformationSwiperHeaderType.OVERVIEW;
  public informationSwiperHeaderType = InformationSwiperHeaderType;

  public profileImageButtons: any[] = [
    {
      icon: 'camera',
      text: 'Abrir cámara',
      data: {
        action: 'photo-image',
      },
    },
    {
      icon: 'images',
      text: 'Seleccionar desde galería',
      data: {
        action: 'galery-image',
      },
    },
    {
      icon: 'trash',
      text: 'Eliminar imagen de perfil',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    }
  ];

  constructor(
    private utils: UtilsService
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

    Object.assign(this.profileInformationSwiperHeader.nativeElement, swiperParams);
    this.profileInformationSwiperHeader.nativeElement.initialize();
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

    Object.assign(this.profileInformationSwiperBody.nativeElement, swiperParams);
    this.profileInformationSwiperBody.nativeElement.initialize();
  }

  public navigateUserData() {
    this.utils.navigateReplacingUrl('/profile/user-data');
  }

  public navigateUserStats() {
    this.utils.navigateReplacingUrl('/profile/user-stats');
  }
}
