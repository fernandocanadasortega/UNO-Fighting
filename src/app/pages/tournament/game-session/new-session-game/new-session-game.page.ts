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

  public searchOverlay: boolean = false;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log('Carga la información de la carta');
  }

  refreshGameSession(refreshEvent: any) {
    setTimeout(() => {
      // Any calls to load data go here
      refreshEvent.target.complete();
    }, 1000);
  }

  showSearchOverlay() {
    // Poner un panel que tenga una animación y que se deslice por encima y cubra todo el header (El panel tiene el searchbar y un boton de lupa con el fondo de color)
    this.searchOverlay = this.searchOverlay ? false : true;
  }

  public closeModal() {
    this.modalCtrl.dismiss();
  }
}
