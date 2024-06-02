import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaterialComponentsModule } from 'src/app/material-components.module';
import { TranslateModule } from '@ngx-translate/core';
import { CreateSearchTournamentComponent } from '../../components/create-search-tournament/create-search-tournament.component';
import { SideMenuComponent } from 'src/app/components/side-menu/side-menu.component';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'tournaments',
  templateUrl: './tournament.page.html',
  styleUrls: ['./tournament.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule, MaterialComponentsModule, CreateSearchTournamentComponent, HeaderComponent]
})
export class Tournament {

  constructor() { }

}
