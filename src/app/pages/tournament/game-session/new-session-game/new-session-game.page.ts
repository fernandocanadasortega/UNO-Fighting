import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { MaterialComponentsModule } from '../../../../material-components.module';

@Component({
  selector: 'new-session-game',
  templateUrl: './new-session-game.page.html',
  styleUrls: ['./new-session-game.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, TranslateModule, MaterialComponentsModule, HeaderComponent]
})
export class NewSessionGamePage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('Carga la información de la carta');
  }

  public closeModal() {
    this.modalCtrl.dismiss();
  }
}
