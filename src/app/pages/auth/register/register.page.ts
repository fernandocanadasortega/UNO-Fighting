import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialComponentsModule } from '../../../material-components.module';
import { UtilsService } from '../../../services/utils.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, TranslateModule, RouterModule, MaterialComponentsModule]
})
export class RegisterPage implements OnInit {

  public showPassword: boolean = false;

  constructor(public utils: UtilsService) { }

  ngOnInit() {
  }

  public toggleShowPassword() {
    this.showPassword = this.showPassword ? false : true;
  }
}
