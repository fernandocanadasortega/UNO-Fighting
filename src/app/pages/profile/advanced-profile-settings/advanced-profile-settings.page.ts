import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { MaterialComponentsModule } from '../../../material-components.module';

@Component({
  selector: 'advanced-profile-settings',
  templateUrl: './advanced-profile-settings.page.html',
  styleUrls: ['./advanced-profile-settings.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule, MaterialComponentsModule, HeaderComponent]
})
export class AdvancedProfileSettingsPage implements OnInit {

  public currentPassword: string = '';
  public newPassword: string = '';
  public repeatNewPassword: string = '';
  public deleteAccountPassword: string = '';
  public theme: string = 'default';
  public showPassword: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleShowPassword() {
    this.showPassword = this.showPassword ? false : true;
  }

  public changeTheme(toggleEvent: any) {
    this.theme = toggleEvent.value;
  }
}
