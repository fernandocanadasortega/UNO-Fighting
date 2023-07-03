import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialComponentsModule } from '../../../material-components.module';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule, RouterModule, MaterialComponentsModule]
})
export class ResetPasswordPage implements OnInit {

  constructor(public utils: UtilsService) { }

  ngOnInit() {
  }

}
