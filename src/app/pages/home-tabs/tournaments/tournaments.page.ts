import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActionSheetController, IonicModule } from '@ionic/angular';
import { MaterialComponentsModule } from 'src/app/material-components.module';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.page.html',
  styleUrls: ['./tournaments.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MaterialComponentsModule]
})
export class TournamentsPage implements OnInit {

  private currentFilter: string = 'name';

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    console.log('Cargan mis torneos');
  }

  async showFilters(header: string) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: header,
      cssClass: 'action-sheet',
      buttons: [
        {
          text: 'Nombre',
          cssClass: this.currentFilter === 'name' ? 'filter-active' : '',
          data: {
            action: 'name',
          },
        },
        {
          text: 'Fecha',
          cssClass: this.currentFilter === 'date' ? 'filter-active' : '',
          data: {
            action: 'date',
          },
        },
        {
          text: 'Número de participantes',
          cssClass: this.currentFilter === 'players' ? 'filter-active' : '',
          data: {
            action: 'players',
          },
        }
      ],
    });

    await actionSheet.present();

    let filterValues: any = await actionSheet.onDidDismiss();
    if (filterValues['data'] == undefined) return;
    this.currentFilter = filterValues['data']['action'];
  }
}
