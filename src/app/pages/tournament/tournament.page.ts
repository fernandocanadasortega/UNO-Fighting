import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialComponentsModule } from '../../material-components.module';
import { CreateSearchTournamentComponent } from '../../components/create-search-tournament/create-search-tournament.component';
import { HeaderComponent } from '../../components/header/header.component';

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
