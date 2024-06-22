import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { MaterialComponentsModule } from '../../../material-components.module';

@Component({
  selector: 'card-information',
  templateUrl: './card-information.page.html',
  styleUrls: ['./card-information.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, TranslateModule, MaterialComponentsModule, HeaderComponent]
})
export class CardInformationPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('Carga la información de la carta');
  }

  public closeModal() {
    this.modalCtrl.dismiss();
  }
}
