import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaterialComponentsModule } from 'src/app/material-components.module';
import { UtilsService } from 'services/utils.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'search-tournament',
  templateUrl: './search-tournament.page.html',
  styleUrls: ['./search-tournament.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule, MaterialComponentsModule]
})
export class SearchTournament implements OnInit {

  constructor(private utils: UtilsService) { }

  ngOnInit() {
    console.log('Carga el buscador de torneos');
  }

  createTournament() {
    this.utils.navigateReplacingUrl('/home/new-tournament');
  }
}
