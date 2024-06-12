import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UtilsService } from 'services/utils.service';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialComponentsModule } from '../../../material-components.module';
import { HeaderComponent } from '../../../components/header/header.component';

@Component({
  selector: 'modify-profile',
  templateUrl: './modify-profile.page.html',
  styleUrls: ['./modify-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule, MaterialComponentsModule, HeaderComponent]
})
export class ModifyProfilePage implements OnInit {

  public email: string = '';
  public username: string = '';
  public password: string = '';
  public repeatPassword: string = '';

  public showPassword: boolean = false;

  constructor(private utils: UtilsService) { }

  ngOnInit() {
    this.email = 'thenapo212@gmail.com';
  }

  public toggleShowPassword() {
    this.showPassword = this.showPassword ? false : true;
  }

  public saveData() {
    console.log(`Guardando datos. Nombre de usuario: ${this.username}, Contraseña: ${this.password}, Repetir contraseña: ${this.repeatPassword}.`);
    this.utils.navigateReplacingUrl('/home/profile');
  }
}
