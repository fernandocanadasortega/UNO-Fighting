import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaterialComponentsModule } from '../../../material-components.module';
import { UtilsService } from 'services/utils.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MaterialComponentsModule]
})
export class UserDataPage implements OnInit {

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

  public save() {
    console.log(`Guardando datos. Nombre de usuario: ${this.username}, Contraseña: ${this.password}, Repetir contraseña: ${this.repeatPassword}.`);
    this.utils.navigateReplacingUrl('/home/profile');
  }
}
