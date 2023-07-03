import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActionSheetButton, IonicModule } from '@ionic/angular';
import { MaterialComponentsModule } from 'src/app/material-components.module';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.page.html',
  styleUrls: ['./tournaments.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MaterialComponentsModule]
})
export class TournamentsPage implements OnInit {

  public filterButtons: ActionSheetButton[] = [
    {
      text: 'Fecha',
      cssClass: 'filter-active',
      data: {
        action: 'date',
      },
    },
    {
      text: 'Número de participantes',
      data: {
        action: 'player-numer',
      },
    },
    {
      text: 'Número de partidas',
      data: {
        action: 'game-numer',
      },
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log('Cargan mis torneos');
  }
}
