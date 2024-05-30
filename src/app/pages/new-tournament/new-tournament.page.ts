import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaterialComponentsModule } from 'src/app/material-components.module';
import { TranslateModule } from '@ngx-translate/core';
import { UtilsService } from 'services/utils.service';
import { SweetAlertService } from 'services/sweet-alert.service';
import { SweetAlertResult } from 'sweetalert2';

export enum Tabs {
  MENU,
  CREATE,
  FINISH_CREATE,
  JOIN
}

@Component({
  selector: 'app-new-tournament',
  templateUrl: './new-tournament.page.html',
  styleUrls: ['./new-tournament.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule, MaterialComponentsModule],
})
export class NewTournamentPage implements OnInit {

  constructor(
    private utils: UtilsService,
    private sweetAlert: SweetAlertService
  ) { }

  ngOnInit() {
    console.log('Carga el creador de torneos');
  }

  searchTournament() {
    this.utils.navigateReplacingUrl('/home/search-tournament');
  }

  async createTournament() {
    let result: SweetAlertResult = await this.sweetAlert.showSwal({ title: 'Torneo creado exitosamente', text: '¿Deseas navegar a la página del torneo?', icon: 'success', showCancelButton: true });
    if (result.isConfirmed) {
      // TODO - navegar a los detalles del torneo creado
      this.utils.navigateReplacingUrl('/login');
      return;
    }

    this.utils.navigateReplacingUrl('/home/tournaments-list');
  }
}
