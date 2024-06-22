import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { UtilsService } from 'services/utils.service';
import { MaterialComponentsModule } from '../../material-components.module';

@Component({
  selector: 'create-search-tournament',
  templateUrl: './create-search-tournament.component.html',
  styleUrls: ['./create-search-tournament.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, MaterialComponentsModule, RouterModule]
})
export class CreateSearchTournamentComponent {

  public searchTournament: boolean = true;

  constructor(public utils: UtilsService) { }

  toogleSearchTournament() {
    this.searchTournament = this.searchTournament ? false : true;
  }
}
