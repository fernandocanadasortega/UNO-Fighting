import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MaterialComponentsModule } from '../../material-components.module';
import { CardInformationPage } from './card-information/card-information.page';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'rules',
  templateUrl: './rules.page.html',
  styleUrls: ['./rules.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, TranslateModule, MaterialComponentsModule, HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RulesPage implements OnInit, AfterViewInit {

  @ViewChildren('cardSwiper') cardSwipers!: QueryList<ElementRef>;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('Cargan las reglas');
  }

  ngAfterViewInit(): void {
    for (const swiper of this.cardSwipers) {
      this.startInformationSwiperHeader(swiper);
    }
  }

  startInformationSwiperHeader(swiper: ElementRef) {
    const swiperParams: SwiperOptions = {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      initialSlide: 2,
      loop: true,
      slideToClickedSlide: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 400,
        modifier: 1,
        slideShadows: false
      }
    };

    Object.assign(swiper.nativeElement, swiperParams);
    swiper.nativeElement.initialize();
  }

  async showCard() {
    const modal = await this.modalCtrl.create({
      component: CardInformationPage
    });
    modal.present();
  }
}
