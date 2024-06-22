import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MaterialComponentsModule } from '../../material-components.module';
import { CardInformationPage } from './card-information/card-information.page';

@Component({
  selector: 'rules',
  templateUrl: './rules.page.html',
  styleUrls: ['./rules.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, TranslateModule, MaterialComponentsModule, HeaderComponent]
})
export class RulesPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('Cargan las reglas');
  }

  async showCard() {
    const modal = await this.modalCtrl.create({
      component: CardInformationPage
    });
    modal.present();
  }
}
