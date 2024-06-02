import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { UtilsService } from 'services/utils.service';
import { MaterialComponentsModule } from 'src/app/material-components.module';
import { BugReport } from '../bug-report/bug-report.page';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, TranslateModule, MaterialComponentsModule, BugReport]
})
export class SideMenuComponent  implements OnInit {

  constructor(
    private utils: UtilsService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  public navigateToTournament() {
    this.utils.navigateReplacingUrl('/tournament');
  }

  public navigateToProfile() {
    this.utils.navigateReplacingUrl('/profile');
  }

  public navigateToRules() {
    this.utils.navigateReplacingUrl('/rules');
  }

  public async showBugReportModal() {
    const modal = await this.modalCtrl.create({
      component: BugReport,
    });
    modal.present();
  }

  public logout() {
    this.utils.navigateReplacingUrl('/login');
  }
}
