import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialComponentsModule } from '../../../material-components.module';
import { UtilsService } from '../../../services/utils.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule, RouterModule, MaterialComponentsModule]
})
export class LoginPage implements OnInit {

  public showPassword: boolean = false;

  constructor(public utils: UtilsService) { }

  ngOnInit() {

  }

  public toggleShowPassword() {
    this.showPassword = this.showPassword ? false : true;
  }

  public resetPassword() {
    this.utils.navigateReplacingUrl('/reset-password');
  }

  public authUser() {
    this.utils.navigateReplacingUrl('/home');
  }
}
