import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { MaterialComponentsModule } from '../../../material-components.module';
import { UtilsService } from 'services/utils.service';

@Component({
  selector: 'user-match-history',
  templateUrl: './user-match-history.page.html',
  styleUrls: ['./user-match-history.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, TranslateModule, MaterialComponentsModule, HeaderComponent]
})
export class UserMatchHistoryPage implements OnInit {

  constructor(private utils: UtilsService) { }

  ngOnInit() {

  }

  refreshMatchHistory(refreshEvent: any) {
    setTimeout(() => {
      // Any calls to load data go here
      refreshEvent.target.complete();
    }, 1000);
  }

  returnProfile() {
    this.utils.navigateReplacingUrl('/profile');
  }
}
